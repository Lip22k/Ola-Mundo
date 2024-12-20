import './App.css';
// Devemos importar o componente criado
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header EmpriseName = "Empresa Ficticia" qtdAtributos = "3" components1="home" components2="products" components3="about"/>
    </div>
  );
}

export default App;
