import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=""> {/* Adjust padding based on navbar height */}
      <Outlet />
    </div>
  );
};

export default Layout;
