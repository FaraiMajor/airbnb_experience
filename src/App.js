import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data.jsx"

function App() {
  let cards = data.map(card => {
    return (
      <Card key={card.id}
        {...card}
      />);
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;