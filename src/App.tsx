import Links from "./components/links";
import Navbar from "./components/navbar";
import Table from "./components/table";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-5/6 mx-auto">
        <Links />
        <Table />
      </div>
    </>
  );
}

export default App;
