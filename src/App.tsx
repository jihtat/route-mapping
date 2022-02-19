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
          if (!route.nestedRoutes) {
            return (
              <Route
                path={route.path}
                element={<route.component />}
                key={key}
              />
            );
          }
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={key}
              children={route.nestedRoutes.map((nested, idx) => {
                return (
                  <Route
                    path={nested.path}
                    element={<nested.component />}
                    key={idx}
                  />
                );
              })}
            />
          );
        })}
        {protectedRoutes.map((route, key) => {
          if (!route.nestedRoutes) {
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
          }
          return (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              }
              key={key}
              children={route.nestedRoutes.map((nested, idx) => {
                return (
                  <Route
                    path={nested.path}
                    element={<nested.component />}
                    key={idx}
                  />
                );
              })}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
