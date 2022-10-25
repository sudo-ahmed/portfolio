import Nav from "./components/Nav"
import Header from "./components/Header"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Container} from "@mui/material"
import './style.css'
const App = ()=>{
  return(
    <Container sx={{backgroundColor: 'black'}}>
      <Nav />
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App