import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DefaultLayout() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1280px",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
