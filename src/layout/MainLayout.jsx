import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        home
      <Outlet />
    </div>
  );
};

export default MainLayout;
