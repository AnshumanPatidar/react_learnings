import { useSelector } from "react-redux";
import "./App.css";
import Container from "./component/Container";
import Controls from "./component/Controls";
import DisplayCounter from "./component/DisplayCounter";
import Header from "./component/Header";
import "Bootstrap/dist/css/bootstrap.min.css";
import Privacy from "./component/Privacy";

function App() {
  const privateVal = useSelector((store) => store.private);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center ">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privateVal ? <DisplayCounter /> : <Privacy />}

            <Controls></Controls>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
