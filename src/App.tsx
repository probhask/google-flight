import Header from "@/layouts/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen  w-screen">
      <Header />
      <main className="relative top-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
