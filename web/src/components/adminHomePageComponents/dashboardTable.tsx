import { Pencil, Trash2 } from "lucide-react";
import { EmptyProducts } from "./emptyProducts";
import "../styles/style.css";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  item_set: string;
  price: number;
};

type DashboardTableProps = {
  products: Product[] | null;
};

export function DashboardTable({ products }: DashboardTableProps) {
  if (products?.length == 0) {
    return <EmptyProducts />;
  }
  return (
    <table
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        margin: "24px",
      }}
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Lista</th>
          <th>Atualizar</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td style={{ fontSize: "0.9em" }}>{product.id}</td>
            <td style={{ fontSize: "0.9em" }}>{product.name}</td>
            <td style={{ fontSize: "0.9em" }}>{product.category}</td>
            <td style={{ fontSize: "0.9em" }}>R$ {product.price}</td>
            <td style={{ fontSize: "0.9em" }}>{product.item_set}</td>
            <td>
              <Link to={`/admin/update/${product.id}`}>
                <Pencil size={24} strokeWidth={1} className="att-icon" />
              </Link>
            </td>
            <td>
              <Trash2 size={24} strokeWidth={1} className="del-icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
