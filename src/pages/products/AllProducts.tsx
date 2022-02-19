import { Link, Outlet } from "react-router-dom";

export function AllProducts() {
  return (
    <>
      <nav>
        <Link to="new">New</Link>
        <Link to="best">Best</Link>
      </nav>
      <Outlet />
    </>
  );
}
