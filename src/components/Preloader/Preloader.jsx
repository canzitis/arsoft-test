import React from 'react';
import preloaderImg from '../../img/preloader.gif'
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloaderImg} alt=""/>
        </div>
    );
};
export default Preloader;
