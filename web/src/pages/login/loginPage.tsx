import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./style.css";

type loginFormEntries = {
  email: string;
  password: string;
};

type responseErrorType = {
  response: {
    data: {
      message: string;
    };
  };
};

export function LoginPage() {
  document.title = "React Store - Login";
  const { signIn, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //Recuperação das credenciais digitadas pelo usuario
    const formData = new FormData(event.currentTarget);
    const loginEntries = {
      email: formData.get("user-email"),
      password: formData.get("user-password"),
    } as loginFormEntries;
    console.log(loginEntries);

    try {
      await signIn(loginEntries);
      console.log("deu certo, redirecionando....");

      navigate("/app");
    } catch (error) {
      const { response } = error as responseErrorType;
      alert(response?.data?.message);
    }
  }

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/app" />
      ) : (
        <main
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "400px",
              maxWidth: "520px",
              gap: "12px",
              border: "none",
              padding: "36px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "400" }}>
              React Store
            </h2>
            <label htmlFor="user-email" style={{ fontWeight: "700" }}>
              {" "}
              Email
            </label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Insira seu email"
              style={{
                fontSize: "0.9em",
                padding: "8px 12px",
                border: "1px solid gray",
                borderRadius: "6px",
              }}
            />
            <label htmlFor="user-password" style={{ fontWeight: "700" }}>
              Senha
            </label>
            <input
              type="password"
              name="user-password"
              id="user-password"
              placeholder="Insira sua senha"
              style={{
                fontSize: "0.9em",
                padding: "8px 12px",
                border: "1px solid gray",
                borderRadius: "6px",
              }}
            />
            <hr style={{ marginTop: "16px" }} />
            <Link
              to="/register"
              style={{
                textAlign: "end",
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              {" "}
              Cadastre-se
            </Link>
            <button
              type="submit"
              style={{
                backgroundColor: "#242424",
                color: "#fff",
                fontSize: "1em",
                padding: "8px 0px",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Entrar
            </button>
          </form>
        </main>
      )}
    </>
  );
}
