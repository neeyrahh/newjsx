import logo from './logo.svg';
import './App.css';
import images from './images/shirt.jpeg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style= {{borderSolid: '1px' ,maxWidth : '100vw'}}/>
      <h1 className = 'title red'>Munirat</h1>
      <img src="/images.jpeg/mirra.jpeg" alt="image"/>
      <br />
      <img src= {images} alt = "image" />
      
      
    </div>
  );
}

export default App;
