// import do css
import './Header.css';

function Header(props) {
  let qtdAtributos = props.qtdAtributos, i=1, arrayAtributos = [];
  // Looping para pegar os valores que o dev quer no menu
  while (i <= qtdAtributos) {
    let componentName = props[`components${i}`];
    arrayAtributos.push(<li className='Menu__list__components'><a href=''>{componentName}</a></li>)
    i++;
  }
  return (
    <nav className="Menu">
      <h3 className='Menu__logo'>{props.EmpriseName}</h3>
      <ul className='Menu__list'>
        {/* retorna a array inteira */}
        {arrayAtributos}
      </ul>
      <a className='Menu__login' href=''>LOGIN/REGISTER</a>
    </nav>
  );
}

export default Header;
