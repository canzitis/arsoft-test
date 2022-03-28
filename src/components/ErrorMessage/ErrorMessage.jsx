import s from './ErrorMessage.module.scss'
import errorImg from '../../img/errorImg.gif'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getUsers} from "../../redux/app-reducer";

const ErrorMessage = () => {
    const dispatch = useDispatch();
    const [timeValue, setTimeValue] = useState(120)

    useEffect(() => {
        setTimeout(() => {
            setTimeValue(timeValue - 1)
            timeValue === 0 && dispatch(getUsers())
        }, 1000)


    }, [timeValue])

    return <div className={s.errorMessageContainer}>
        <img src={errorImg} alt=""/>
        <h2>Что-то пошло не так...</h2>
        <span>Уже чиним.</span>
        <span>Повторная проверка связи через: <b>{timeValue}</b></span>
    </div>
}
export default ErrorMessage;
