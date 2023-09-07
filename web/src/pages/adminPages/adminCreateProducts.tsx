import { FormEvent } from "react";
import { AdminAsideMenu } from "../../components/AdminAsideMenu";
import { AdminHeader } from "../../components/AdminHeader";
import "./style.css";
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

export function AdminCreateProducts() {
  document.title = "Admin Panel - Criar Novo Produto";
  const navigate = useNavigate();

  async function handleCreateProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = Cookie.get("authToken");
    const formData = new FormData(event.currentTarget);

    try {
      console.log(formData.get("product-set"));
      const formPrice = formData.get("product-price");

      if (!formPrice) return alert("Price is missing");

      const { data } = await api.post(
        "product",
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
      console.log(data);
      navigate("/admin");
      return alert("created");
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
        <AdminHeader title="Products / New" />
        <form
          onSubmit={handleCreateProduct}
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
            />
          </div>
          <div className="form-component">
            <label htmlFor="product-category">Categoria</label>
            <input
              type="text"
              id="product-category"
              name="product-category"
              placeholder="Categoria do produto"
            />
          </div>

          <div className="form-component">
            <label htmlFor="product-coverUrl">Imagem do Produto</label>
            <input
              type="text"
              id="product-coverUrl"
              name="product-coverUrl"
              placeholder="Cole a URL referente a imagem do produto"
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
              type="number"
              id="product-price"
              name="product-price"
              placeholder="Preço"
            />
          </div>
          <div className="form-component description">
            <label htmlFor="product-description">Descrição</label>
            <textarea
              id="product-description"
              name="product-description"
              placeholder="Insira a descrição do produto"
            />
          </div>
          <button type="submit">Criar</button>
        </form>
      </section>
    </main>
  );
}
