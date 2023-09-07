import { Laptop, PackageSearch, FilePlus2 } from "lucide-react";
import { AsideItem } from "./adminHomePageComponents/asideItem";

export function AdminAsideMenu() {
  return (
    <aside
      style={{
        backgroundColor: "#363636",
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <h3
        style={{
          color: "#ffffff",
          paddingLeft: "12px",
          marginBottom: "20px",
        }}
      >
        Admin Panel
      </h3>
      <h5
        style={{
          color: "#ffffff",
          paddingLeft: "12px",
          fontWeight: 400,
        }}
      >
        Home
      </h5>
      <AsideItem to="/admin" classname="aside-item">
        <Laptop size={20} strokeWidth={1.25} />
        <small>Dashboard</small>
      </AsideItem>
      <h5
        style={{
          color: "#ffffff",
          paddingLeft: "12px",
          fontWeight: 400,
        }}
      >
        Manage Items
      </h5>
      <AsideItem to="/admin/products" classname="aside-item">
        <PackageSearch size={20} strokeWidth={1.25} />
        <small>Products</small>
      </AsideItem>
      <h5
        style={{
          color: "#ffffff",
          paddingLeft: "12px",
          fontWeight: 400,
        }}
      >
        Create Items
      </h5>
      <AsideItem to="/admin/new" classname="aside-item">
        <FilePlus2 size={20} strokeWidth={1.25} />
        <small>Create a product</small>
      </AsideItem>
    </aside>
  );
}
