import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ArteDeTodaGente from '../src/views/ArteDeTodaGenteSec/ArteDeTodaGenteSec';
import Calendario from '../src/views/CalendarioSec/CalendarioSec';
import Sinos from '../src/views/SinosSec/SinosSec';
import BossaCriativa from '../src/views/BossaCriativaSec/BossaCriativaSec';
import Uno from '../src/views/UnoSec/UnoSec';

function App() {
  return (
    <>
      <Navbar />
      <ArteDeTodaGente />
      <Calendario />
      <Sinos />
      <BossaCriativa />
      <Uno />
    </>
  );
}

export default App;
