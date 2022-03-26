import React from "react";
import s from './Sorting.module.scss'

const Sorting = ({SortData,id}) => {
    return <>
        <button className={s.sortButton} onClick={() => {
            SortData(id)
        }}/>
    </>
}
export default Sorting;
