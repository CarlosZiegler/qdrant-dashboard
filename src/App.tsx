import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import useTitle from "./components/UseTitle";

function AppRoutes() {
  useTitle("UI | Qdrant ");
  const routing = useRoutes(routes.components());

  return <main style={{ height: "100vh" }}>{routing}</main>;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
export default App;
