import Header from "./components/Header";
import Search from "./components/Search";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="max-w-[370px] m-auto pt-2 h-[100vh]">
      <Header />
      <Search />
      <Contacts />

    </div>
  );
}

export default App;
