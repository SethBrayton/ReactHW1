import bicycle from "../Images/blablabla.png";
import style from '../Part1/Part1.module.css'

function Part1() {
  return (
    <div className={style.main_wrapper}>
      <div className={style.main_p}>
        <h1>Что мы предлагаем</h1>
          <p>
            В нашей мастерской можно выполнить комплексное техническое
            обслуживание велосипеда, ремонт и настройку всех его узлов,
            шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
            избежать многих проблем и дорогого ремонта. Все работы выполняем
            качественно и с душой.
          </p>
      </div>
      <img src={bicycle} alt="bice" height = {604} />
    </div>
  );
}
export default Part1;
