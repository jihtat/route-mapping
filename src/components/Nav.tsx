import { Link, Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="profile">Profile</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
      </nav>
      <div
        style={{
          backgroundColor: "violet",
          margin: "auto",
          width: "50vw",
          textAlign: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
