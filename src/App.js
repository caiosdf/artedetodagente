import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ArteDeTodaGente from '../src/views/ArteDeTodaGenteSec/ArteDeTodaGenteSec';
import Sinos from '../src/views/SinosSec/SinosSec';

function App() {
  return (
    <>
      <Navbar />
      <ArteDeTodaGente />
      <Sinos />
    </>
  );
}

export default App;
