

/*Importing Components*/

import { NavBar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Testimonial } from './components/Testimonial';




import DeviceProvider from './Provider';

/*Device Context*/



function App() {


  return (
    <div className="App">

    <DeviceProvider>

      <NavBar />
      <Home/>
      <Testimonial/>
      <Footer/>
   
      </DeviceProvider>
    </div>
  );
}

export default App;
