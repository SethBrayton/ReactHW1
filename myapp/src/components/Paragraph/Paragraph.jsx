import dinozavr from "../Images/din 1.png";
import style from "./Paragraph.module.css";

function Paragraph() {
  return (
    <div className={style.paragraph_wrapper}>
      <div className={style.paragraph_dino}>
        <div className={style.paragraph_text}>
          <h1>Веломастерская “Велозар”</h1>
          <p>
            Мы, мастера веломастерской «Велозар», как раз те самые счастливые
            люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
            сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
            только радость и удовольствие от езды.
          </p>
        </div>
        <img className={style.img} src={dinozavr} alt="dino" />
      </div>
    </div>
  );
}

export default Paragraph;
