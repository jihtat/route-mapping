import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { publicRoutes } from "./routes/public";
import { protectedRoutes } from "./routes/protected";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {publicRoutes.map((route, key) => {
          return (
            <Route path={route.path} element={<route.component />} key={key} />
          );
        })}
        {protectedRoutes.map((route, key) => {
          return (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              }
              key={key}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
