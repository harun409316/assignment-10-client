import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Pages/Home/Home.jsx';
import ExploreArtworks from './Pages/ExploreArtworks/ExploreArtworks.jsx';
import AddArtworks from './Pages/AddArtwork/AddArtworks.jsx';
import MyGallery from './Pages/MyGallery/MyGallery.jsx';

import ErrorPage from './Pages/Errorpage.jsx';
import Regester from './Pages/Regester/Regester.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRout from './Context/PrivateRout.jsx';
import ExploreCardDetailse from './Pages/ExploreCardDetailse/ExploreCardDetailse.jsx';
import MyFavorties from './Pages/MyFavorites/MyFavorties.jsx';
import Loading from './Pages/Loading/Loading';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <MainLayouts/>,
    hydrateFallbackElement: <Loading/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'explore-artworks',
        Component: ExploreArtworks,
        loader: ()=> fetch('http://localhost:5000/artwork')
        

      },
      {
        path:'add-artwork',
        element: <PrivateRout>
          <AddArtworks></AddArtworks>
        </PrivateRout>,
      },
      {
        path:'my-gallery',
        element: <PrivateRout>
          <MyGallery></MyGallery>
        </PrivateRout>
      },
      
      {
        path: 'regester',
        Component: Regester,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
  path: 'explore-details/:id',
  element: (
    <PrivateRout>
      <ExploreCardDetailse />
    </PrivateRout>
  ),
  loader: ({ params }) =>
    fetch(`http://localhost:5000/artwork/${params.id}`)
  
},
{
  path: 'my-favorites',
  element:(
  <PrivateRout>
    <MyFavorties/>
  </PrivateRout>
  ),
  loader: () => fetch('http://localhost:5000/my-favorites')

}

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer/>
  </StrictMode>,
)
