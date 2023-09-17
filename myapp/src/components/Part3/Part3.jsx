import style from "../Part3/Part3.module.css"

function Part3() {
    return (
        <div className={style.all_parts}>
            <div className={style.part1}>
                <p>__________________</p>
                <p>Годовое ТО</p>
            </div>
            <div className={style.part2}>
                <p>__________________</p>
                <p>Выравнивание колес</p>
            </div>
            <div className={style.part3}>
                <p>__________________</p>
                <p>Настройка переключателей</p>
            </div> 
        </div>
    )
}

export default Part3