import './App.css';

// Devemos importar o componente criado
import Header from './components/Header/Header';
import Person from './components/CardPerson/CardPerson';
function App() {
  class pessoa {
    constructor(urlImg, name, description) {
      this.urlImg = urlImg;
      this.name = name;
      this.description = description;
    }
  }
  const person = new pessoa(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-wvjX0Yvo3KqXfp_IeoonXmPheozq_1_J92DSkGNRKqlIeWqN",
    "Philip Viana",
    "Sou um cara legal, cola ai"
  )
  const person2 = new pessoa(
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "Sai dae caralho Viana",
    "Sou um cara legal, cola ai"
  )
  return (
    <div className="App">
      <Header enterpriseName="Empresa Ficticia" qtdAtributos="3" components1="home" components2="products" components3="about" />
      <Person urlImg={person2.urlImg} name={person2.name} description={person2.description} />
      <Person urlImg={person.urlImg} name={person.name} description={person.description} />
    </div>
  );
}

export default App;
