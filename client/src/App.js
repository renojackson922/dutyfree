import Header from './class/Header'
import Calendar2 from './class/Calendar2'
import './App.css';
import '@google-web-components/google-chart';

function App() {
  return (
    <>
      <Header />
      <Mp3Test/>
      <div className="container text-center">
        <div className="mt-2" style={{maxWidth:"500px", margin:"0 auto"}}>
          <div className="mt-2 mb-2 row">
            <div className="col-4 text-start" style={{fontSize:"2.5rem"}}>
            <a className="btn btn-secondary" href="#" onClick=""><i className="fas fa-chevron-left"></i></a>
            </div>
            <div className="col-4 text-center" style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span style={{fontSize:"1.5rem"}}>2021.04</span>
            </div>
            <div className="col-4 text-end" style={{fontSize: '2.5rem'}}>
              <a className="btn btn-secondary" href="#" onClick=""><i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
          <Calendar2 year={2021} month={3} />
          <div className="card">
            <div className="card-header">듀티통계</div>
            <div className="card-body">
              {/* <google-chart data='[["Month", "Days"], ["Jan", 31]]'></google-chart> */}
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
