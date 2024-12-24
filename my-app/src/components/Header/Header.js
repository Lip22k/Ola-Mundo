// import do css
import './Header.css';

function Header(props) {
  let qtdAtributos = props.qtdAtributos, i=1, arrayAtributos = [], url="https://www.youtube.com/watch?v=ZLtBdpwg8tI&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=5";
  // Looping para pegar os valores que o dev quer no menu
  while (i <= qtdAtributos) {
    let componentName = props[`components${i}`];
    arrayAtributos.push(<li className='Menu__list__components'><a href={url}>{componentName}</a></li>)
    i++;
  }
  return (
    <nav className="Menu">
      <h3 className='Menu__logo'>{props.enterpriseName}</h3>
      <ul className='Menu__list'>
        {arrayAtributos}
      </ul>
      <a className='Menu__login' target='_blanck' href={url}>LOGIN/REGISTER</a>
    </nav>
  );
}

export default Header;
