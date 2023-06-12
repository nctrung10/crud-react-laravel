import { Outlet } from "react-router-dom";

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="container my-2">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;