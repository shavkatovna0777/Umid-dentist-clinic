import { NavLink, useLocation } from "react-router-dom";

function HeaderLink({ to, children }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const location = useLocation();

  const isActiveHome =
    to == "/" &&
    (location.pathname.startsWith("/1") ||
      location.pathname.startsWith("/2") ||
      location.pathname.startsWith("/3"));
  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) => {
        return `shadow p-[8px_20px] rounded-[32px] transition-all duration-300 ease-in-out text-darkBlue text-[15px] lg:text-[13px] slg:text-[11px] font-semibold ${
          isActive || isActiveHome
            ? "bg-lightBlue text-white"
            : "hover:bg-[#98d0f1] hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out"
        }`;
      }}
    >
      {children}
    </NavLink>
  );
}

export default HeaderLink;
