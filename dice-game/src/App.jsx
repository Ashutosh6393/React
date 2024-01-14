import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import GamePage from "./pages/GamePage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />,
  },
  { path: "/game", element: <GamePage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
