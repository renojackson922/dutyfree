import Header from './class/Header'
import Calendar from './class/Calendar'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <span style={{ fontSize:"2.5rem"}}>듀티를 찾아봅시다</span>
        <div className="mt-2" style={{maxWidth:"700px", margin:"0 auto"}}><Calendar /></div>
      </div>
    </>
  );
}

export default App;
