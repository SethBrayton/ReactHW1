import bicycles from "../Images/bicycles.png"
import style from "../Footer/Footer.module.css"

function Footer () {
    return (
        <div className={style.footer_wrapper}>
            <img src={bicycles} alt="bicycles" />
         <div className={style.p_footer}>
             <p>Прокат велосипедов</p>
             <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>   
         </div>
        </div>
    )
}

export default Footer