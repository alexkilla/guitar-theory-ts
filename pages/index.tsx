import { Fretboard} from 'react-fretboard'

const Home = () => (
  <div>
    <Fretboard skinType="strings" selectedNotes={["C3", "E3", "G3"]} />
  </div>
);

export default Home;