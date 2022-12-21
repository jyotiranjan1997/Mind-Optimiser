import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <AllRoutes />
      <Footer/>
      
    </div>
  );
}

export default App;
