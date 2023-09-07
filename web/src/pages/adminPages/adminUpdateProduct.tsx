import { AdminAsideMenu } from "../../components/AdminAsideMenu";
import { AdminHeader } from "../../components/AdminHeader";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/api";
import { FormEvent } from "react";
import { useFetch } from "../../hooks/useFetch";
import Cookie from "js-cookie";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  item_set: string;
  cover_url: string;
  price: number;
};

export function AdminUpdateProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = Cookie.get("authToken");
  const { data: product } = useFetch<Product>(`/product/${id}`);

  async function handleUpdateProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      console.log(formData.get("product-set"));
      const formPrice = formData.get("product-price");

      if (!formPrice) return alert("Price is missing");

      await api.put(
        `product/${product?.id}`,
        {
          name: formData.get("product-name"),
          category: formData.get("product-category"),
          cover_url: formData.get("product-coverUrl"),
          description: formData.get("product-description"),
          item_set: formData.get("product-set"),
          price: +formPrice.toString(),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }
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
        <AdminHeader title={`Products / Update / ${product?.name} `} />
        <form
          onSubmit={handleUpdateProduct}
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            marginLeft: "24px",
            padding: "12px",
            width: "768px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div className="form-component name">
            <label htmlFor="product-name">Nome</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              placeholder="Nome do produto"
              defaultValue={product?.name}
            />
          </div>
          <div className="form-component">
            <label htmlFor="product-category">Categoria</label>
            <input
              type="text"
              id="product-category"
              name="product-category"
              placeholder="Categoria do produto"
              defaultValue={product?.category}
            />
          </div>

          <div className="form-component">
            <label htmlFor="product-coverUrl">Imagem do Produto</label>
            <input
              type="text"
              id="product-coverUrl"
              name="product-coverUrl"
              placeholder="Cole a URL referente a imagem do produto"
              defaultValue={product?.cover_url}
            />
          </div>

          <div className="form-component">
            <label htmlFor="product-set">Lista de inserção do produto</label>
            <select name="product-set" id="product-set">
              <option value="Novidades">Novidades</option>
              <option value="Produtos obsoletos">
                Produtos que não saem de moda
              </option>
            </select>
          </div>

          <div className="form-component">
            <label htmlFor="product-price">Preço</label>
            <input
              type="text"
              id="product-price"
              name="product-price"
              placeholder="Preço"
              defaultValue={product?.price}
            />
          </div>
          <div className="form-component description">
            <label htmlFor="product-description">Descrição</label>
            <textarea
              id="product-description"
              name="product-description"
              placeholder="Insira a descrição do produto"
              defaultValue={product?.description}
            />
          </div>
          <button type="submit">Atualizar</button>
        </form>
      </section>
    </main>
  );
}
