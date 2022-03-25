import React from 'react';
import preloaderGif from '../../img/preloader.gif'
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloaderGif} alt=""/>
        </div>
    );
};
export default Preloader;
