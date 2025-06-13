
import './App.css';
// import Navbar from './components/Navbar';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home'
import FarmerRegister from './components/FarmerRegister'
import FarmerLogin from './components/FarmerLogin'
import BuyerRegister from './components/BuyerRegister';
import BuyerLogin from './components/BuyerLogin';
import BuyerDashboard from './components/BuyerDashboard';
import FarmerDashboard from './components/FarmerDashboard';
import Products from './components/Products';
import Requirement from './components/Requirement';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import BuyerDetailsPage from './components/BuyerDetailsPage';
function App() {
  return (
    <div className="App">
          <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/farmer-register' element={<FarmerRegister/>}/>
          <Route path='/farmer-login' element={<FarmerLogin/>}/>
          <Route path='/buyer-register' element={<BuyerRegister/>}/>
          <Route path='/buyer-login' element={<BuyerLogin/>}/>
          <Route path='/buyer-dashboard' element={<BuyerDashboard/>} />
          <Route path='/farmer-dashboard' element={<FarmerDashboard/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/requirements' element={<Requirement/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/buyer/:requirementId" element={<BuyerDetailsPage />} />
        </Routes>
      </Router>
  
     {/* <Home/> */}
    </div>
  );
}

export default App;








