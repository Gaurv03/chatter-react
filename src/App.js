import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage></Homepage>
  }, {
    path: "/register",
    element: < Signup />
  }, {
    path: "/login",
    element: <Login />
  }, {
    path: "/",
    element: <Login />
  }
])

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center object-cover">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
