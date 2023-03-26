import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./views/components/PrivateRoute";
import PublicRoute from "./views/components/PublicRoute";
import { routeConfig } from "./routes/routes";
// import 'antd/dist/reset.css';

function App() {

  return (
    <div className="wrapper">
      <Routes>
        {routeConfig.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              route.isProtected ? (
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              ) : (
                <PublicRoute>
                  <route.component />
                </PublicRoute>
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App
