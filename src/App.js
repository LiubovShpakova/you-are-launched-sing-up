import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingUpPage from "./Pages/SingUpPage/singUpPage";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <div className="App">
        <SingUpPage />
      </div>
    </>
  );
}

export default App;
