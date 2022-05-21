import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/reusableComponents/Nav'
import Footer from './components/reusableComponents/Footer'

const App = () => {
    return (
      <BrowserRouter>
          <div>
              <Nav />
          </div>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" exact element={<About />} />
                  <Route path="/contact" exact element={<Contact />} />
              </Routes>
          </div>
          <div>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
  
  export default App;