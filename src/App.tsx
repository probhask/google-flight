import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-primary-50 w-screen">
      <Outlet />
    </div>
  );
}

export default App;
