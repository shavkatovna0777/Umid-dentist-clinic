import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

function DashboardLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet key={location.key} />
      </main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
