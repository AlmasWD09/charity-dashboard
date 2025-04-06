import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Link to="/admin/dashboard">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </Link>
      </div>
    </>
  );
}

export default App;
