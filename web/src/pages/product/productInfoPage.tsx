import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import Cookies from "js-cookie";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  price: number;
};

export function ProductInfoPage() {
  const { id } = useParams();
  const token = Cookies.get("authToken");

  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  //Chamada a api para resgatar o produto na base de dados com o id
  useEffect(() => {
    api
      .get(`product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setProduct(response.data.result))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSaleProduct() {
    const userCookie = Cookies.get("authUser");

    if (!userCookie) {
      throw new Error("unknown cookie");
    }

    const user = JSON.parse(userCookie);
    await api.post(
      `${id}/buy`,
      {
        userId: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Produto comprado com sucesso");
    navigate("/app");
  }

  return (
    <div key={product?.id}>
      <section
        style={{
          width: "100%",
          marginTop: "32px",
          padding: "16px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <img
          src={product?.cover_url}
          alt="product_cover_url"
          style={{
            objectFit: "scale-down",
            height: "250px",
            width: "400px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>{product?.name}</h3>
          <small>Categoria: {product?.category}</small>
          <small>R$:{product?.price}</small>
          <hr style={{ width: "50%", marginTop: "16px" }} />
          <button
            onClick={handleSaleProduct}
            type="button"
            className="button-see-product"
            style={{
              marginTop: "16px",
              width: "100px",
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#363636",
              color: "#fff",
            }}
          >
            Comprar
          </button>
        </div>
      </section>
      <section
        style={{
          marginTop: "32px",
          width: "100%",
          padding: "16px 0px",
        }}
      >
        <h2 style={{ fontWeight: "600", marginBottom: "24px" }}>Descrição</h2>
        <p>{product?.description}</p>
      </section>
    </div>
  );
}
