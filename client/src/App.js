import React,{useContext} from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { AuthContext } from './context/authContext';
import { createBrowserRouter, RouterProvider, Outlet , Navigate  } from "react-router-dom";
import HomeEtudiants from './pages/HomeEtudiant/HomeEtudiants';
import HomeAdmin from './pages/HomeAdmin/HomeAdmin';
import HomeProf from './pages/HomeProf/HomeProf';


const App = () => {
  const { currentUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
  return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home",
          element :(
            <ProtectedRoute>
              <HomeEtudiants />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
        path: "/homeadmin",
        element :(
        <ProtectedRoute>
            <HomeAdmin />
         </ProtectedRoute>
        )
        },
        {
        path: "/homeprof",
        element :(
        <ProtectedRoute>
            <HomeProf />
         </ProtectedRoute>
        )
        },
  
      ],
     
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;