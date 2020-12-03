import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ArteDeTodaGente from '../src/views/ArteDeTodaGenteSec/ArteDeTodaGenteSec';
import Sinos from '../src/views/SinosSec/SinosSec';
import BossaCriativa from '../src/views/BossaCriativaSec/BossaCriativaSec';


function App() {
  return (
    <>
      <Navbar />
      <ArteDeTodaGente />
      <Sinos />
      <BossaCriativa />
    </>
  );
}

export default App;
