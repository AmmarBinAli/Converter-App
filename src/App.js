import './App.css';
import Navbar from './components/Navbar';
import TextFarm from './components/TextFarm';

function App() {
  return (
    <>
   <Navbar title = "WORD COUNTER" />
   <div className="container my-3">
    <TextFarm heading = "Eneter The Text To Analyze :" />
   </div>
    </>
  );
}

export default App;
