import './App.css';
import './Responsive.css';
import 'primeicons/primeicons.css';

import Header from "./components/Header/Header.js";
import Feed from "./components/Portfolio/Feed.js";
import Stats from './components/Stats/Stats';
import Content from './components/ContentApp/Content.js';

function App() {
  return (
    <div className="App">
      
      <div className='header'>
        <Header/>
      </div>
      
      <div className='app__header'>
        <div className='body__container'>
          <Feed />
          <Stats />
        </div>
      </div>
      <div className='app_content'>
        <Content />
      </div>

    </div>
  );
}

export default App;
