import Nav from "../Nav/Nav";
import Paragraph from "../Paragraph/Paragraph";
import style from "../Header/Header.module.css";

function Header() {
  const nav = [
    { name: "О нас", link: "#" },
    { name: "Услуги", link: "#" },
    { name: "Аренда", link: "#" },
  ];

  return (
    <div className={style.header}>
      <Nav nav={nav}  />
      <Paragraph />
    </div>
  );
}

export default Header;
