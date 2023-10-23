import { UserRequestProduct } from "../../components/userProfileComponents/userRequest";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../../lib/api";
import { Link } from "react-router-dom";

type userRequests = {
  id: string;
  name: string;
  age: number;
  phone: string;
  category: string;
  description: string;
  cover_url: string;
  price: number;
  avatar_url: string;
};

type userSales = {
  userId: string;
  createdAt: string;
  product: userRequests;
};

export function UserProfilePage() {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState<userSales[] | null>(null);
  document.title = `React Store - Informações do ${user?.name}`;

  useEffect(() => {
    const token = Cookies.get("authToken");
    api
      .get(`user/${user?.id}/requests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.userSales);

        setRequests(response.data.userSales);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section
        style={{
          display: "grid",
          padding: "20px 32px",
          gridTemplateColumns: "2fr 4fr",
          gap: "48px",
        }}
      >
        {/** Seçao de informações do usuario */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
            maxHeight: "560px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "32px",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <img
              src={user?.avatar_url}
              alt="avatar_url"
              style={{
                overflow: "",
                width: "128px",
                height: "128px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <h3>{user?.name}</h3>
          </div>

          <div
            style={{
              padding: "10px 14px",
            }}
          >
            <h4>Informações do usuario</h4>
            <small>Nome Completo</small>
            <p>{user?.name}</p>
            <hr style={{ marginBottom: "10px" }} />
            <small>Idade</small>
            <p>{user?.age}</p>
            <hr style={{ marginBottom: "10px" }} />
            <small>Email</small>
            <p>{user?.email}</p>
            <hr style={{ marginBottom: "10px" }} />
            <small>Telefone</small>
            <p>{user?.phone}</p>
            <hr style={{ marginBottom: "10px" }} />
            <small>Endereço</small>
            <p>{user?.address}</p>
          </div>
        </div>
        {/** Seçao de pedidos */}
        <div>
          <header style={{}}>
            <header
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h2
                style={{
                  fontWeight: "500",
                  padding: "10px 0",
                }}
              >
                Comprado anteriormente
              </h2>
              <h4
                style={{
                  color: "rgb(113 113 122)",
                  fontWeight: "400",
                  fontSize: "0.9em",
                }}
              >
                Abaixo estão os produtos que você comprou recentemente. Confira:
              </h4>
            </header>
          </header>
          {!requests || requests.length === 0 ? (
            <div
              style={{
                marginTop: "32px",
                fontWeight: "500",
              }}
            >
              <h3 style={{ fontWeight: 400 }}>Não foi feita nenhuma compra</h3>

              <small style={{ fontWeight: 400 }}>
                <Link
                  to="/app"
                  style={{
                    textDecoration: "none",
                    color: "#242424",
                  }}
                >
                  clique aqui para ver novos produtos
                </Link>
              </small>
            </div>
          ) : (
            requests?.map((request) => (
              <div key={request.product.id}>
                <UserRequestProduct
                  name={request.product.name}
                  buyedAt={request.createdAt}
                  category={request.product.category}
                  coverUrl={request.product.cover_url}
                  price={request.product.price}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
