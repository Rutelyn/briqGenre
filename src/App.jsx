import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import LandingPage from "./pages/landingPage"
import AboutUs from "./pages/aboutUs"
import Products from "./pages/products"


const router = createBrowserRouter(
  [
    {path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: "aboutus",
        element: <AboutUs/>
      },
      {
        path: "products",
        element: <Products/>
      },
      
    ]
  }


  ]
)
function App() {
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}
export default App