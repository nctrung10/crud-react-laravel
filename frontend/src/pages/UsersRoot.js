import { Outlet } from "react-router-dom";

function UsersRootLayout() {
  return (
    <>
      <h1 className="text-center">Users Management</h1>
      <Outlet />
    </>
  );
}

export default UsersRootLayout;