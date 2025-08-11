import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";
function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export { Root };
