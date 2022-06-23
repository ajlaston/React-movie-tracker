import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Footer from './component/Footer';
import { MovieContextProvider } from './MovieContext';

function App() {
  return (
    <MovieContextProvider>
      <div className="app">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </MovieContextProvider>

  );
}

export default App;
