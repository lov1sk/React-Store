import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

export function AdminHeader({ title }: { title: string }) {
  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <header
      style={{
        padding: " 50px 25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          fontWeight: 300,
          color: "darkgray",
        }}
      >
        Admin /
        <span
          style={{
            fontWeight: 600,
            color: "#000",
          }}
        >
          {" "}
          {title}
        </span>
      </h1>
      <Link
        to="/login"
        onClick={handleSignOut}
        style={{
          marginRight: "25%",
          backgroundColor: "#242424",
          color: "#fff",
          fontSize: "1em",
          padding: "8px 14px",
          border: "none",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Sair
      </Link>
    </header>
  );
}
