import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Shop from "./components/Shop";
import Stats from "./components/Stats";

function App() {
   return (
      <div className='App'>
         <Header />
         <Navbar />
         <About />
         <Shop />

         <Orders />
         <Stats/>
      </div>
   );
}

export default App;
