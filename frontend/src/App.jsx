import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Container className="py-3">
        <Outlet />
      </Container>
      <ToastContainer />
    </>
  );
};

export default App;
