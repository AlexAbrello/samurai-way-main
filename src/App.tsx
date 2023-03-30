import style from './App.module.css'

import {Content} from './components/body/Content';
import {Header} from './components/header/Header';
import {Navigation} from "./components/body/Navigation";

function App() {
  return (
      <div className={style.wrapper}>
        <Header/>
        <div className={style.container}>
          <Navigation/>
          <Content/>
        </div>
      </div>
  );
}

export default App;
