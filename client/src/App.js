import Header from './class/Header'
import Calendar2 from './class/Calendar2'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <span style={{ fontSize:"2.5rem"}}>듀티를 찾아봅시다</span>
        <div className="mt-2" style={{maxWidth:"700px", margin:"0 auto"}}>
          <div className="mt-2 mb-2 row">
            <div className="col-6">
              <select className="form-control text-center">
                <option selected>2021</option>
              </select>
            </div>
            <div className="col-6">
              <select className="form-control text-center">
                <option selected>3</option>
              </select>
            </div>
          </div>
          <Calendar2 year={2021} month={3} />
          </div>
      </div>
    </>
  );
}

export default App;
