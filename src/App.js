import './App.css';
// import Counter from './components/Counter/Counter.jsx'
import Header from './components/Header/Header';
import AllGan from './components/AllGan/AllGan';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  
  const Incares = () => {
    const newCounter = count + 1;
    setCount(newCounter);
  }

  return (
    <main className="App">
      <Header count={count}></Header>
      <AllGan Incares={Incares}></AllGan>
    </main>
  );
}

export default App;
