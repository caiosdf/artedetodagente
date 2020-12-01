import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ArteDeTodaGente from '../src/views/ArteDeTodaGenteSec/ArteDeTodaGenteSec';
import BossaCriativa from '../src/views/BossaCriativaSec/BossaCriativaSec';

function App() {
  return (
    <>
      <Navbar />
      <ArteDeTodaGente />
      <BossaCriativa />
    </>
  );
}

export default App;
