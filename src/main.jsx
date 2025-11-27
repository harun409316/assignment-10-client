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
import MyFavourite from './Pages/MyFavourite/MyFavourite.jsx';
import ErrorPage from './Pages/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'explore-artworks',
        Component: ExploreArtworks,
      },
      {
        path:'add-artwork',
        element: <AddArtworks></AddArtworks>
      },
      {
        path:'my-gallery',
        element: <MyGallery></MyGallery>
      },
      {
        path:'my-favorites',
        element: <MyFavourite></MyFavourite>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
