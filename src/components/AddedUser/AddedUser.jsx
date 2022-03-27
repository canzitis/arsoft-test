import s from './AddedUser.module.scss'
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addedUser, getOrganization} from "../../redux/app-reducer";
import Preloader from "../Preloader/Preloader";

const AddedUser = ({setModeAddedUser, modeAddedUser}) => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.roles);
    const organization = useSelector((state) => state.organization);
    const windowLoading = useSelector((state) => state.windowLoading);

    useEffect(() => {
        getOrganization()
    }, [modeAddedUser])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addedUser(data))
    }

    return <div className={s.addedUserContainer}>
        <div>
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
                            style={{border: errors.name && "solid 1px #E26F6F"}}
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
                            style={{border: errors.name && "solid 1px #E26F6F"}}
                            placeholder='Введите имя'
                            type="text"
                            {...register("UserName", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Пароль:</span>
                        <input
                            style={{border: errors.name && "solid 1px #E26F6F"}}
                            placeholder='Введите пароль'
                            type="password"
                            {...register("pass", {required: true})}
                            minLength={2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <span>Роль:</span>
                        <select className={s.optionRole}
                                placeholder="Выберите роль"
                                {...register('roles', {
                                    required: true,
                                })}>
                            {roles.map((item) => {
                                return <option key={item.name}>{item.name}</option>
                            })}
                        </select>
                    </div>


                    {/* <div>
                        <span>Организация:</span>
                        <select className={s.optionRole}
                                placeholder="Выберите организацию"
                                {...register('roles', {
                                    required: true,
                                })}>
                            {organization.map((item) => {
                                return <option key={item.companyTitle}>{item.companyTitle}</option>
                            })}
                        </select>
                    </div>*/}
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
        </div>
    </div>
}
export default AddedUser;
