import './App.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header/Header.js";
import Content from './components/ContentApp/Content.js';
import Trending from "./components/Trending/Trending.js";

function App() {
  return (
    <div className="App">
      
      <div className='header'>
        <Header/>
      </div>
      
      <div className='trending__blocks'>
        <Trending />
      </div>

      <div className='app_content'>
        <Content />
      </div>

    </div>
  );
}

export default App;
