import { Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import "./styles/style.css";

export function Header() {
  return (
    <header
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <section
        style={{
          paddingTop: "32px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/app"
          className="link"
          style={{
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "1.2em",
            marginLeft: "140px",
          }}
        >
          React Store
        </Link>
        <UserProfile />
      </section>
      <nav
        style={{
          display: "inherit",
          marginLeft: "-100px",
          padding: "10px 0px",
          gap: "32px",
        }}
      >
        <Link
          to="/app/itemNews"
          className="link"
          style={{ textDecoration: "none", fontWeight: "300" }}
        >
          Novidades
        </Link>
        <Link
          to="/app/discountProducts"
          className="link"
          style={{ textDecoration: "none", fontWeight: "300" }}
        >
          Promoções
        </Link>
        <Link
          to="/app/contact"
          className="link"
          style={{ textDecoration: "none", fontWeight: "300" }}
        >
          Contato
        </Link>
        <Link
          to="/app/about"
          className="link"
          style={{ textDecoration: "none", fontWeight: "300" }}
        >
          Sobre nós
        </Link>
      </nav>
    </header>
  );
}
