import './App.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header/Header.js";
import Newsfeed from "./components/NewsFeed/Newsfeed.js";
import Stats from './components/Stats/Stats.js';

function App() {
  return (
    <div className="App">
      
      <div className='header'>

        <Header/>

      </div>
      
      <div className='app__body'>
        <div className='body__container'>
          <Newsfeed />
          <Stats />
        </div>
      </div>

    </div>
  );
}

export default App;
