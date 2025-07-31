// importing pages
import Home from "./pages/1-home/Home"
import About from "./pages/2-about/About"
import Articles from "./pages/3-articles/Articles"
import Projects from "./pages/4-projects/Projects"
import Speaking from "./pages/5-speaking/Speaking"
import Uses from "./pages/6-uses/Uses"

// importing components
import Header from "./components/1-header/Header"
import Footer from "./components/5-footer/Footer"

// importing libraries
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom" // use for routing
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { useState } from "react"
import { useEffect } from "react"

// creating layout component ===> this function will wrap all the pages.
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  // creating router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/speaking" element={<Speaking />}></Route>
          <Route path="/uses" element={<Uses />}></Route>
        </Route>
      </Route>
    )
  )

  const [showScrolleBTN, setShowScrolleBTN] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrolleBTN(true)
      } else {
        setShowScrolleBTN(false)
      }
    })
  }, [])

  return (
    <div className={`container `}>
      { /* returning router */}
      <RouterProvider router={router} />
      {/* button scrolle to up  */}
      <a style={{ opacity: showScrolleBTN ? 1 : 0, transition: "1s" }} href="#up"><button className="scrolle2up"><MdOutlineKeyboardArrowUp /></button></a>
    </div>
  )
}

export default App