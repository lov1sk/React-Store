import { Link } from "react-router-dom";
import "../styles/style.css";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { api } from "../../lib/api";
import Cookie from "js-cookie";

type productInfo = {
  id: string;
  name: string;
  price: number;
  cover_url: string;
};

export function Product({ id, name, price, cover_url }: productInfo) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const token = Cookie.get("authToken");
  async function handleAddFavorite(id: string) {
    setIsFavorite((state) => !state);
    if (!isFavorite) {
      const { data: product } = await api.get(`/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const itensStored =
        JSON.parse(sessionStorage.getItem("cartProducts")!) ?? [];
      const newItens = [...itensStored, product.result];
      sessionStorage.setItem("cartProducts", JSON.stringify(newItens));
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px 12px",
        width: "250px",
        minHeight: "430px",
        borderRadius: "6px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <img
        src={cover_url}
        alt="image of the product"
        style={{
          objectFit: "scale-down",
          width: "100%",
          height: "220px",
        }}
      />
      <div
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <p
          style={{
            gridColumn: "1/1",
            gridRow: "1/1",
            fontWeight: "300",
          }}
        >
          {name}
        </p>
        <button
          className="favorite-button"
          style={{
            gridColumn: "2/2",
            gridRow: "1/1",
            fontWeight: "300",
            textAlign: "end",
            paddingRight: "6px",
          }}
        >
          {isFavorite ? (
            <Check size={20} strokeWidth={1} />
          ) : (
            <Star
              size={20}
              strokeWidth={1}
              className="favorite-icon"
              onClick={() => handleAddFavorite(id)}
            />
          )}
        </button>

        <p
          style={{
            gridColumn: "1/1",
            gridRow: "2/2",
            fontWeight: "200",
            fontSize: "0.9em",
          }}
        >
          R$ {price}
        </p>
        <Link
          to={`/app/product/${id}`}
          className="button-see-product"
          style={{
            gridColumn: "2/2",
            gridRow: "2/2",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "14px",
            textDecoration: "none",
            width: "80px",
            backgroundColor: "#363636",
            color: "#fff",
            border: "none",
            padding: "8px 10px",
            borderRadius: "10px",
          }}
        >
          {" "}
          Ver{" "}
        </Link>
      </div>
    </div>
  );
}
