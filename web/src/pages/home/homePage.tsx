import { useState } from "react";
import { Product } from "../../components/homePageComponents/Product";
import { ProductSection } from "../../components/homePageComponents/ProductSection";
import { useFetch } from "../../hooks/useFetch";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  price: number;
};

export function HomePage() {
  document.title = "React Store";
  const { data: products } = useFetch<Product[]>("products");
  const [qtdProducts, setQtdProducts] = useState<number>(4);

  if (!products) {
    return null;
  }
  if (products?.length > qtdProducts) {
    console.log(qtdProducts);
    return (
      <div>
        <ProductSection
          title="Bem Vindo"
          subtitle="Confira alguns de nossos produtos e garanta sua compra!"
        >
          {products.map((product, index) => {
            if (index >= qtdProducts) {
              return null;
            }

            return (
              <Product
                id={product.id}
                name={product.name.substring(0, 25).concat(" ...")}
                price={product.price}
                cover_url={product.cover_url}
              />
            );
          })}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button onClick={() => setQtdProducts((state) => state + 4)}>
              Mostrar mais
            </button>
          </div>
        </ProductSection>
      </div>
    );
  } else {
    return (
      <div>
        <ProductSection
          title="Bem Vindo"
          subtitle="Confira alguns de nossos produtos e garanta sua compra!"
        >
          {products?.map((product) => (
            <div key={product.id}>
              <Product
                id={product.id}
                name={product.name.substring(0, 25).concat(" ...")}
                price={product.price}
                cover_url={product.cover_url}
              />
            </div>
          ))}
        </ProductSection>
      </div>
    );
  }
}
