import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function DashboardLayout() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
