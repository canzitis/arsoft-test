import s from './AddedUser.module.scss'
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addedUser, getOrganization} from "../../redux/app-reducer";
import Preloader from "../Preloader/Preloader";

const AddedUser = ({setModeAddedUser, modeAddedUser}) => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.roles);
    const organizations = useSelector((state) => state.organizations);
    const windowLoading = useSelector((state) => state.windowLoading);


    useEffect(() => {
        dispatch(getOrganization())
    }, [modeAddedUser])
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addedUser(data))
        setModeAddedUser(false)
    }

    return <div className={s.addedUserContainer}>
        {!windowLoading ? <Preloader/> : <div>
            <h4>Создание пользователя</h4>
            <form onSubmit={handleSubmit(onSubmit)} className={s.addedUserForm}>
                <div className={s.addedUserFormWrapper}>
                    <div>
                        <span>Имя:</span>
                        <input
                            style={{border: errors.name && "solid 1px #E26F6F"}}
                            placeholder='Введите имя'
                            type="text"
                            {...register("name", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Фамилия:</span>
                        <input
                            style={{border: errors.lastName && "solid 1px #E26F6F"}}
                            placeholder='Введите фамилию'
                            type="text"
                            {...register("lastName", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Username:</span>
                        <input
                            style={{border: errors.email && "solid 1px #E26F6F"}}
                            placeholder='Введите почту'
                            type="email"
                            {...register("email", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Пароль:</span>
                        <input
                            style={{border: errors.pass && "solid 1px #E26F6F"}}
                            placeholder='Введите пароль'
                            type="password"
                            {...register("pass", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Дата:</span>
                        <input
                            style={{border: errors.date && "solid 1px #E26F6F"}}
                            placeholder='Дата'
                            type="datetime-local"
                            {...register("date", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Роль:</span>
                        <select className={s.option}
                                style={{
                                    border: errors.roles && "solid 1px #E26F6F",
                                    color: errors.roles && "red"
                                }}
                                {...register('roles', {
                                    required: true,
                                })}>
                            <option value=''>Выберите роль</option>
                            {roles.map((item) => {
                                return <option key={item.name}>{item.name}</option>
                            })}
                        </select>
                    </div>


                    <div>
                        <span>Организация:</span>
                        <select className={s.option}
                                style={{
                                    border: errors.companyTitle && "solid 1px #E26F6F",
                                    color: errors.companyTitle && "red"
                                }}
                                {...register('companyTitle', {
                                    required: true,
                                })}>
                            <option value=''>Выберите организацию</option>
                            {organizations.map((item) => {
                                return <option value={item.companyTitle} key={item.companyTitle}>{item.companyTitle}</option>
                            })}
                        </select>
                    </div>
                </div>


                <div className={s.buttonWrapper}>
                    <button onClick={() => {
                        setModeAddedUser(false)
                    }}>
                        Закрыть
                    </button>
                    <button
                        type="submit"
                    >Сохранить
                    </button>
                </div>
            </form>
        </div>}

    </div>
}
export default AddedUser;
