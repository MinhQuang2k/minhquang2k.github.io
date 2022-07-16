import { useRoutes } from "react-router-dom";
import { routes } from "./routers/Routers";

function App() {
  let element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
