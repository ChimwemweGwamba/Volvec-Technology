import './App.css';
import Nav from './components/nav/nav';
import Banner from './components/banner/banner';
import Services from './components/services/services';
import SalesPoint from './components/salesPoint/salesPoint';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';




function App() {
  return (
    <div>
      <div className='bannerSectionContainer'>
        <div className='container'>
          <Nav></Nav>
          <Banner></Banner> 
        </div>
      </div>

      <div className='container'>
        <Services></Services>
        <SalesPoint></SalesPoint>
      </div>

      <div className='footerContainer'>
        <div className='container'>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
