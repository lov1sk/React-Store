import { BaggageClaim, ChevronDown, LogOut, UserCircle } from "lucide-react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function UserProfile() {
  const { signOut, user } = useContext(AuthContext);

  async function handleSignOut() {
    const hasProducts = sessionStorage.getItem("cartProducts");
    if (hasProducts) {
      sessionStorage.removeItem("cartProducts");
    }
    await signOut();
  }

  return (
    <section style={{ position: "relative", left: "20%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {!user?.avatar_url ? (
          <UserCircle strokeWidth={1} size={24} />
        ) : (
          <img
            src={user?.avatar_url}
            style={{
              width: "42px",
              height: "42px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        )}

        <Link
          to="/app/user"
          className="link"
          style={{ textDecoration: "none", margin: "6px", width: "120px" }}
          title="Ver suas informações"
        >
          <small>Olá {user?.name.substring(0, 5).concat(" ...")}</small>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <small>minha conta </small>
            <ChevronDown size={18} strokeWidth={1} />
          </div>
        </Link>
        {/** Icones carrinho e sair */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Link
            to="/app/cart"
            className="link"
            style={{ textDecoration: "none" }}
            title="Carrinho"
          >
            <BaggageClaim size={24} strokeWidth={1} />
          </Link>
          <Link
            to="/login"
            onClick={handleSignOut}
            className="link-logout"
            style={{
              textDecoration: "none",
              width: "20px",
              backgroundColor: "#FFF",
              border: "none",
              marginLeft: "-16px",
            }}
            title="Sair da aplicação"
          >
            <LogOut strokeWidth={1} size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
