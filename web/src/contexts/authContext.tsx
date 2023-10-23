import { createContext, useState } from "react";
import Cookie from "js-cookie";
import { api } from "../lib/api";

type userReceived = {
  id: string;
  name: string;
  age: number;
  avatar_url: string;
  password: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  role: "admin" | "user";
};

type responseSuccessType = {
  data: {
    token: string;
    user: userReceived;
  };
};
type authContextType = {
  signIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signOut: () => Promise<void>;
  register: ({
    avatar_url,
    phone,
    name,
    email,
    age,
    gender,
    address,
    password,
  }: Omit<userReceived, "id" | "role">) => Promise<void>;
  user: userReceived | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

export const AuthContext = createContext({} as authContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userReceived | null>(
    (): userReceived | null => {
      const token = Cookie.get("authToken");
      const userCookie = Cookie.get("authUser");
      // Verifica se os cookies realmente existem
      if (!token || !userCookie) {
        return null;
      }
      // Seta um user no state
      return JSON.parse(userCookie);
    }
  );

  async function register({
    avatar_url,
    phone,
    name,
    email,
    age,
    gender,
    address,
    password,
  }: Omit<userReceived, "id" | "role">) {
    const { data } = (await api.post("/register", {
      name,
      email,
      avatar_url,
      phone,
      age,
      gender,
      address,
      password,
    })) as responseSuccessType;

    setUser(data.user);
    //Salvar nos cookies o token e o user
    Cookie.set("authToken", data.token);
    Cookie.set("authUser", JSON.stringify(data.user));
  }

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    // Mandamos as credenciais para o backend validar
    const { data } = (await api.post("/login", {
      email,
      password,
    })) as responseSuccessType;

    //Se houver sucesso, o usuario é enviado para a tela inicial
    if (!data.token) {
      return alert("Error when auth");
    }

    setUser(data.user);

    //Salvar nos cookies o token e o user
    Cookie.set("authToken", data.token);
    Cookie.set("authUser", JSON.stringify(data.user));
  }

  async function signOut() {
    Cookie.remove("authToken");
    Cookie.remove("authUser");
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        register,
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role == "admin" ? true : false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
