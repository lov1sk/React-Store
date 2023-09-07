import { Trash2 } from "lucide-react";
import "./style.css";

type cartProductInfo = {
  imageUrl: string;
  name: string;
  category: string;
  price: string;
};

export function CartItem({ imageUrl, name, category, price }: cartProductInfo) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "16px",
        width: "100%",
        marginTop: "16px",
        padding: "16px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        height: "180px",
      }}
    >
      <img
        src={imageUrl}
        alt="cart image product"
        style={{ height: "150px", width: "150px", objectFit: "scale-down" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{}}>{name}</h3>
          <p style={{ fontSize: "0.9em", marginTop: "6px" }}>{category}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Trash2
            className="delete-icon"
            strokeWidth={1}
            size={18}
            style={{ alignSelf: "flex-end" }}
          />
          <p style={{ textAlign: "end" }}>Total: R$ {price}</p>
        </div>
      </div>
    </section>
  );
}
