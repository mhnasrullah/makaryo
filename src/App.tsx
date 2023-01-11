import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Navbar from "./sections/Navbar"
import Offer from "./sections/Offer"
import Partner from "./sections/Partner"
import Recommendation from "./sections/Recommendation"
import Why from "./sections/Why"
import WindowContext from "./utils/context"


function App() {

  return (
    <WindowContext>
      <Navbar/>
      <Header/>
      <Recommendation/>
      <Why/>
      <Partner/>
      <Offer/>
      <Footer/>
    </WindowContext>
  )
}

export default App
