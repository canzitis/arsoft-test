import s from './Pagination.module.scss'
import React from "react";
import arrowLeft from '../../img/arrow-left.png'
import arrowRight from '../../img/arrow-right.png'
import {useSelector} from "react-redux";

const Pagination = ({buttonArray, setCurrentPageFC}) => {
    const currentPage = useSelector((state) => state.currentPage);

    return <div className={s.container}>
        <span>Страницы</span>
        <div className={s.buttonSortWrapper}>
            <button className={s.arrowLeft}><img src={arrowLeft} alt=""/></button>
            {buttonArray.map((page, index) => {
                return <div key={index} className={s.itemPage}>
                    <button className={currentPage === page ? s.itemButtonPageActive : ''}
                            onClick={() => setCurrentPageFC(page)
                            }>{page + 1}</button>
                </div>
            })}
            <button className={s.arrowRight}><img src={arrowRight} alt=""/></button>
        </div>
    </div>
}
export default Pagination;
