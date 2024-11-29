import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import LandingPage from "./pages/landingPage"


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
        name: "About Us",
        path: "/about"
    },
    
    {
        name: "Products",
        path: "/products"
    },
    
    
    {
        name: "Testimonials",
        path: "/testimonials"
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