import style from './App.module.css'

import {Profile} from './components/body/Content';
import {Header} from './components/header/Header';
import {Navigation} from "./components/body/Navigation";
import {Messages} from "./components/body/Messages/Messages";
import {News} from "./components/body/News/News";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <Header/>
          <div className={style.container}>
            <Navigation/>
            <div className={style.contentWrapper}>
              <Route path='/profile' component={ () => <Profile />}/>
              <Route path='/messages' component={() => <Messages />}/>
              <Route path='/news' component={() => <News />}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
