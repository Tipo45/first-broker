import Footer from "../Footer/Footer"
import Frontpage from "../FrontPage/Frontpage"
import Header from "../Header/Header"
import Home from "../Home Page/Home"

const FirstDisplay = () => {
  return (
    <div className="m-0 p-0 box-border">
      <Header />
      <main>
        <Frontpage />
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default FirstDisplay
