import './App.css'
import Activites from './components/Activites/Activites'
import Blog from './components/Blog/Blog'
// import Apropos from './components/Apropos/Apropos'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import ProductCard from './components/ProductCard/ProductCard'
import Layout from './components/Section4/Layout'
function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <ProductCard/>
    <Activites/>
    <Layout/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
