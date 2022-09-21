import './App.css';
import Nav from './components/nav/nav';
import Banner from './components/banner/banner';
import Services from './components/services/services';
import SalesPoint from './components/salesPoint/salesPoint';



function App() {
  return (
    <div>
      <div className='container'>
        <Nav></Nav>
        <Banner></Banner> 
        <Services></Services>
        <SalesPoint></SalesPoint>
      </div>
    </div>
  );
}

export default App;
