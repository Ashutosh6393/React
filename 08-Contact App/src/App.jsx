import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="max-w-[400px] m-auto h-[100vh] border p-4 border-gray-700">
      <Header />
      <Search />
      <Contacts />

    </div>
  );
}

export default App;
