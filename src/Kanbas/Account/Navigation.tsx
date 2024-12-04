import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css"; // Ensure the styles are applied

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Account/${link}`;
        const isActive = pathname === path; // Check if the current link is active

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border-0`}
          >
            {link}
          </Link>
        );
      })}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${pathname === "/Kanbas/Account/Users" ? "active" : "text-danger"} border-0`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
