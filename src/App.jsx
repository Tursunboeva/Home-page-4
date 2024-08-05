import './App.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Nav from './components/nav/Nav.jsx'
import { Routes , Route} from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Line from './components/line/Line.jsx'
import {products} from './assets/outfit/static/data.js'
import Products from './components/products/Products.jsx'
import Section  from './components/sections/Section.jsx'
import Section2  from './components/section2/Section2.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <Line/>
    <Products products={products}/>
    <Section/>
    <Section2/>
    <Footer/>
    <Routes>
     <Route path='/' element={ <Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
      
    </>
  )
}

export default App
