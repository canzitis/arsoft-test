import React, {useState} from 'react';
import s from './Users.module.scss'
import Pagination from "../Pagination/Pagination";
import AddedUser from "../AddedUser/AddedUser";
import SortingContainer from "../Sorting/SortingContainer";
import EditUserContainer from "../EditUser/EditUserContainer";
import {useForm} from "react-hook-form";
import EditUserForm from "../EditUser/EditUserForm/EditUserForm";
import DeleteUserContainer from "../DeleteUser/DeleteUserContainer";
import {editUser, fileDownload} from "../../redux/app-reducer";
import {useDispatch} from "react-redux";
import Roles from "../roles/Roles";

const Users = ({users, buttonArray, setCurrentPageFC, fileDownloadText}) => {
    const [modeDeleteUser, setModeDeleteUser] = useState(false)
    const [mailDeleteUser, setMailDeleteUser] = useState(null)
    const [idUserEdit, setIdUserEdit] = useState(null)
    const [modeAddedUser, setModeAddedUser] = useState(false)

    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const deleteUserFC = (mail) => {
        setMailDeleteUser(mail)
        setModeDeleteUser(true)
    }


    const onSubmit = (data) => {
        dispatch(editUser(data))
        setIdUserEdit(null)
    };

    return (<div className={s.container}>
        <div className={s.usersWindow}>
            <div className={s.tableUsersContainer}>
                <div>
                    <div><b>Имя</b>
                        <SortingContainer id={"name"}/>
                    </div>
                    <div><b>Фамилия</b>
                        <SortingContainer id={"lastName"}/>
                    </div>
                    <div><b>Username</b>
                        <SortingContainer id={"userName"}/>
                    </div>
                    <div><b>Роль</b>
                        <SortingContainer id={"roles"}/>
                    </div>
                    <div><b>Организация</b>
                        <SortingContainer id={"organization"}/>
                    </div>
                    <div><b>Изображения</b></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {users.map((i, count) => {
                        return <div key={i.id} className={s.tableItemWrapper}>

                            <div className={s.count}>{count + 1}</div>

                            {i.id === idUserEdit ?
                                <EditUserForm id={i.id} register={register} errors={errors} registerName='name'
                                              placeholder={i.user.name}/> : <div>{i.user.name}</div>}

                            {i.id === idUserEdit ?
                                <EditUserForm id={i.id} register={register} errors={errors} registerName='lastName'
                                              placeholder={i.user.lastName}/> : <div>{i.user.lastName}</div>}

                            {i.id === idUserEdit ?
                                <EditUserForm id={i.id} register={register} errors={errors} registerName='username'
                                              placeholder={i.email ? i.email : "-"}/> :
                                <div>{i.email ? i.email : "-"}</div>}

                            {i.id === idUserEdit ?
                                <EditUserForm id={i.id} register={register} errors={errors} registerName='roles'
                                              select={true}/>
                                : <div>{i.roles.map((roles) => {
                                    return <Roles roles={roles} key={roles.name}/>
                                })}</div>}

                            <div>{i.organization.companyTitle}</div>
                            <div className={s.buttonDownloadImg}>
                                <button type="button" onClick={(() => {
                                    dispatch(fileDownload(i.id))
                                })}/>
                            </div>

                            {i.id === idUserEdit ? <input
                                className={s.updateUserButton}
                                type='submit'
                                value='Обновить'
                            /> : <div className={s.buttonWrapperForm}>
                                <EditUserContainer id={i.id} setIdUserEdit={setIdUserEdit}/>
                                <button type="button" onClick={() => deleteUserFC(i.email)}/>
                            </div>}
                        </div>
                    })}
                </form>
                {modeDeleteUser &&
                    <DeleteUserContainer setModeDeleteUser={setModeDeleteUser} modeDeleteUser={modeDeleteUser}
                                         mailDeleteUser={mailDeleteUser}/>}
                {modeAddedUser && <AddedUser setModeAddedUser={setModeAddedUser} modeAddedUser={modeAddedUser}/>}
            </div>

            <div className={s.footerButtonWrapper}>
                <Pagination buttonArray={buttonArray} setCurrentPageFC={setCurrentPageFC}/>
                <button className={s.addedUser} onClick={() => {
                    setModeAddedUser(true)
                }}>Создать<br/> пользователя
                </button>
            </div>
        </div>
    </div>)
}
export default Users;
