import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  )
}
