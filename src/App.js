import './App.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header/Header.js";
import Content from './components/ContentApp/Content.js';
import Trending from "./components/Trending/Trending.js";
import Navbar from './components/NavBar/Navbar.js';
import MobileNav from './components/MobileNav/MobileNav.js';

function App() {
  return (
    <div className="App">
    
      <div className='navBar'>
        <Navbar />
      </div>

      <div className='MobileNav'>
        <MobileNav />
      </div>
      

      <div className='full_content'>
        <div className='trending__blocks'>
          <Trending />
        </div>

        <div className='app_content'>
          <Content />
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
