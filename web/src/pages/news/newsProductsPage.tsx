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
  item_set: string;
  price: number;
};

export function NewsProductsPage() {
  document.title = "React Store - Novidades";
  const { data: products } = useFetch<Product[]>("products");
  const [qtdProducts, setQtdProducts] = useState<number>(4);
  const newsProducts = products?.filter(
    (product) => product.item_set == "Novidades"
  );
  if (!newsProducts) {
    return null;
  }

  if (newsProducts?.length > qtdProducts) {
    return (
      <div>
        <ProductSection
          title="Novidades na loja"
          subtitle="Nesta seção você tudo que é novidade em nossa loja, claro que com os melhores preços. Confira abaixo: "
        >
          {newsProducts.map((product, index) => {
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
  }

  return (
    <div>
      {!newsProducts || newsProducts.length === 0 ? (
        <h2>Nada a mostrar</h2>
      ) : (
        <ProductSection
          title="Novidades na loja"
          subtitle="Nesta seção você tudo que é novidade em nossa loja, claro que com os melhores preços. Confira abaixo: "
        >
          {newsProducts?.map((product) => (
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
      )}
    </div>
  );
}
