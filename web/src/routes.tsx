import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import App from "./App";
import { DefaultLayout } from "./layouts/defaultLayout";
import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/aboutPage";
import { ContactPage } from "./pages/contact/contactPage";
import { UserProfilePage } from "./pages/user/userProfilePage";
import { CartPage } from "./pages/cart/cartPage";
import { ProductInfoPage } from "./pages/product/productInfoPage";
import { DiscountProductsPage } from "./pages/discount/DiscountProducts";
import { AdminLayout } from "./layouts/adminLayout";
import { AdminHome } from "./pages/adminPages/adminHome";
import { AdminCreateProducts } from "./pages/adminPages/adminCreateProducts";
import { AdminProducts } from "./pages/adminPages/adminProducts";
import { AdminUpdateProducts } from "./pages/adminPages/adminUpdateProduct";
import { NewsProductsPage } from "./pages/news/newsProductsPage";

export const appRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "app",
        element: <DefaultLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "cart",
            element: <CartPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "user",
            element: <UserProfilePage />,
          },
          {
            path: "product/:id",
            element: <ProductInfoPage />,
          },
          {
            path: "discountProducts",
            element: <DiscountProductsPage />,
          },
          {
            path: "itemNews",
            element: <NewsProductsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "new",
        element: <AdminCreateProducts />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "update/:id",
        element: <AdminUpdateProducts />,
      },
    ],
  },
]);
