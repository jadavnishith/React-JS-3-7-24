import Navbar from "./Component/Navbar"
import Carousel from "./Component/Carousel"
import Product from "./Component/Product"
import Container from "./Component/Container"
import Footer from "./Component/Footer"
import FormExample from "./Component/Form"
function App() {

  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"}}>
      <Navbar/>
      <Carousel/>
      <h1 className="text-center mt-4 text-capitalize">Our Product's</h1>
      {/* <Product></Product> */}
      <Container></Container>
      <FormExample/>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
