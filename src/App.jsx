import AddNewPerson from "./components/AddNewPerson";
import "./index.css";

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1 className="text-red-700">
        Kummatti Fund Book{" "}
      </h1>
      <br />
      <AddNewPerson />
    </>
  );
}

export default App;
