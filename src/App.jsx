import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import LandingPage from "./pages/landingPage"
import AboutUs from "./assets/components/aboutUs"
import Products from "./assets/components/products"
import Testimonials from "./assets/components/testimonials"


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
        name: "Home",
        path: "/"
    },
    
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/testimonials",
      element: <Testimonials />
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