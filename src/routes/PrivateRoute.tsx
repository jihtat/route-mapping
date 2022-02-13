import { Navigate } from "react-router";

type Props = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: Props): JSX.Element => {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
