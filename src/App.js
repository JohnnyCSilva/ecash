import './App.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header/Header.js";
import Feed from "./components/Portfolio/Feed.js";
import Stats from './components/Stats/Stats';

<script src="/jquery-3.3.1.min.js"></script>


function App() {
  return (
    <div className="App">
      
      <div className='header'>
        <Header/>
      </div>
      
      <div className='app__body'>
        <div className='body__container'>
          <Feed />
          <Stats />
        </div>
      </div>

    </div>
  );
}

export default App;
