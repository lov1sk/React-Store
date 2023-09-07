import { Link } from "react-router-dom";
import { AdminAsideMenu } from "../../components/AdminAsideMenu";
import { AdminHeader } from "../../components/AdminHeader";
import { DashboardTable } from "../../components/adminHomePageComponents/dashboardTable";
import "./style.css";
import { useFetch } from "../../hooks/useFetch";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  item_set: string;
  price: number;
};

export function AdminProducts() {
  document.title = "Admin Panel - Produtos";
  const { data: products } = useFetch<Product[]>("/products");
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "200px 1fr",
      }}
    >
      <AdminAsideMenu />
      <section>
        <AdminHeader title="Products" />
        <Link
          to="/admin/new"
          style={{
            textDecoration: "none",
            marginLeft: "24px",
            margin: "0 24px",
            padding: "10px",
            backgroundColor: "rgb(34 197 94)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Adicionar Novo Produto
        </Link>
        <div style={{ margin: "48px 0" }}>
          <DashboardTable products={products} />
        </div>
      </section>
    </main>
  );
}
