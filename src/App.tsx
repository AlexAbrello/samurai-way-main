import style from './App.module.css'

import { Content } from './components/body/Content';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
