import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';

function App() {
  return (
    <div className='flex column app'>
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
