import { CircleDollarSign, ClipboardList, ShoppingBasket } from "lucide-react";
import "./style.css";
import { DashboardIndicator } from "../../components/adminHomePageComponents/dashboardIndicator";
import { AdminAsideMenu } from "../../components/AdminAsideMenu";
import { AdminHeader } from "../../components/AdminHeader";
import { useFetch } from "../../hooks/useFetch";
import { DashboardTable } from "../../components/adminHomePageComponents/dashboardTable";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover_url: string;
  item_set: string;
  price: number;
};

export function AdminHome() {
  document.title = "Admin Panel - React";

  const { data } = useFetch<Product[]>("products");

  //Indicador para o numero de produtos
  const numberOfProducts = data?.length ?? 0;

  // Indicador para o numero de listas
  const lists = data?.map((list) => list.item_set);
  const notRepetedLists = lists?.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const numberOfLists = notRepetedLists?.length ?? 0;

  const prices = data?.map((item) => item.price);
  const totalBudget = prices?.reduce((total, price) => total + price, 0) ?? 0;

  console.log(totalBudget.toFixed(2));

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
        <AdminHeader title="Dashboard" />
        <section
          style={{
            maxWidth: "80%",
            marginLeft: "25px",
            display: "flex",
            flexDirection: "row",
            gap: "48px",
          }}
        >
          <DashboardIndicator
            title="Quantidade de produtos: "
            value={numberOfProducts}
          >
            <ShoppingBasket size={24} strokeWidth={1} />
          </DashboardIndicator>
          <DashboardIndicator title="Listas: " value={numberOfLists}>
            <ClipboardList size={24} strokeWidth={1} />
          </DashboardIndicator>
          <DashboardIndicator
            title="Patrimonio total: "
            value={`R$ ${totalBudget.toFixed(2)}`}
          >
            <CircleDollarSign size={24} strokeWidth={1.0} />
          </DashboardIndicator>
        </section>
        <DashboardTable products={data} />
      </section>
    </main>
  );
}
