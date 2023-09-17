import logo from "../Images/logo copy 1.png";
import style from '../Nav/Nav.module.css'


function Nav(props) {
  const { nav } = props;
  return (
    <div className={style.navbar}>
      <img className={style.logo} src={logo} alt="logo"></img>
      <div className={style.navigation}>
        <ul>
          {nav.map((elem) => (
            <li key={elem.name}>{elem.name}</li>
          ))}
        </ul>
      </div>
      <button>Связаться</button>
    </div>
  );
}

export default Nav;
