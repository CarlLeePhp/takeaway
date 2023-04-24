import { CssBaseline, Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
