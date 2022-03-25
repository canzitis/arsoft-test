import s from './Pagination.module.scss'
import React from "react";
import arrowLeft from '../../img/arrow-left.png'
import arrowRight from '../../img/arrow-right.png'

const Pagination = () => {
    return <div className={s.container}>
        <span>Страницы</span>
        <div className={s.buttonSortWrapper}>
            <button><img src={arrowLeft} alt=""/></button>
            <div className={s.itemPage}>
                <button>1</button>
            </div>
            <button><img src={arrowRight} alt=""/></button>
        </div>
    </div>
}
export default Pagination;
