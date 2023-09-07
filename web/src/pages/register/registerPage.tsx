import { FormEvent, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

type userRegister = {
  avatar_url: string;
  name: string;
  email: string;
  gender: string;
  address: string;
  phone: string;
  age: number;
  password: string;
};

type responseErrorType = {
  response: {
    data: {
      message: string;
    };
  };
};

export function RegisterPage() {
  document.title = "React Store - Cadastro";
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleUserRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formAge = formData.get("user-age");

    if (!formAge) return alert("Age is missing");

    const userAge = +formAge.toString();

    const data = {
      name: formData.get("user-name"),
      email: formData.get("user-email"),
      gender: formData.get("user-gender"),
      address: formData.get("user-address"),
      phone: formData.get("user-phone"),
      age: userAge,
      password: formData.get("user-password"),
    } as userRegister;

    //Verificação da senha
    const passwordConfirmation =
      formData.get("user-password") ==
      formData.get("user-password-confirmation");
    if (!passwordConfirmation) return alert("Please check your password");

    try {
      // Recuperamos o avatar escolhido
      const avatarSelected = formData.get("user_avatar") as File;

      if (avatarSelected.name === "") return alert("select a image to avatar");

      // Upamos o arquivo para o storage do supabase
      const { error: err } = await supabase.storage
        .from("avatars")
        .upload(avatarSelected.name, avatarSelected);

      if (err) {
        return alert(err.message);
      }

      const { data: imageUrl } = await supabase.storage
        .from("avatars")
        .getPublicUrl(avatarSelected.name);

      data.avatar_url = imageUrl.publicUrl;

      await register(data);
      navigate("/app");

      //await register(data);
    } catch (error) {
      const { response } = error as responseErrorType;
      alert(response?.data?.message);
    }
  }

  return (
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
        onSubmit={handleUserRegister}
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          maxWidth: "520px",
          maxHeight: "600px",
          overflow: "scroll",
          gap: "12px",
          border: "none",
          padding: "36px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "400" }}>Registro</h2>
        <h4
          style={{
            textAlign: "center",
            alignSelf: "center",
            fontWeight: "400",
            color: "darkgray",
            width: "70%",
          }}
        >
          Entre na plataforma e veja produtos exclusivos para o seu interesse!
        </h4>
        <input type="file" id="user_avatar" name="user_avatar" />
        <label htmlFor="user-name" style={{ fontWeight: "700" }}>
          {" "}
          Nome
        </label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          placeholder="Insira seu nome"
          style={{
            fontSize: "1em",
            padding: "8px 12px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
          required
        />

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
            fontSize: "1em",
            padding: "8px 12px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
          required
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 137px",
            gridTemplateRows: "1fr 1fr",
            gap: "0px 12px",
          }}
        >
          <label htmlFor="user-gender" style={{ fontWeight: "700" }}>
            Genero
          </label>
          <label htmlFor="user-age" style={{ fontWeight: "700" }}>
            Idade
          </label>
          <select
            name="user-gender"
            id="user-gender"
            style={{
              border: "1px solid gray",
              borderRadius: "6px",
              padding: "0.4em 1em",
              fontSize: "1em",
            }}
            required
          >
            <option value="" placeholder="Insira seu genero">
              Insira seu genero
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Gay">Gay</option>
            <option value="Lesbica">Lesbica</option>
          </select>
          <input
            type="number"
            name="user-age"
            id="user-age"
            defaultValue="1"
            min="1"
            max="99"
            style={{
              border: "1px solid gray",
              borderRadius: "6px",
              padding: "0.4em 1em",
              fontSize: "1em",
            }}
          />
        </div>

        <label htmlFor="user-phone" style={{ fontWeight: "700" }}>
          Telefone
        </label>
        <input
          type="text"
          name="user-phone"
          id="user-phone"
          placeholder="Insira seu principal telefone"
          style={{
            fontSize: "1em",
            padding: "8px 12px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
          required
        />
        <label htmlFor="user-address" style={{ fontWeight: "700" }}>
          Endereço
        </label>
        <input
          type="text"
          name="user-address"
          id="user-address"
          placeholder="Insira seu principal endereço"
          style={{
            fontSize: "1em",
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
            fontSize: "1em",
            padding: "8px 12px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
          required
        />
        <label
          htmlFor="user-password-confirmation"
          style={{ fontWeight: "700" }}
        >
          Confirme sua senha
        </label>
        <input
          type="password"
          name="user-password-confirmation"
          id="user-password-confirmation"
          placeholder="Confira se sua senha esta correspondente"
          style={{
            fontSize: "1em",
            padding: "8px 12px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
          required
        />
        <hr style={{ marginTop: "16px" }} />
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
          Cadastrar
        </button>
      </form>
    </main>
  );
}
