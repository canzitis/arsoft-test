import React, {useState} from 'react';
import s from './Users.module.scss'
import Pagination from "../Pagination/Pagination";
import AddedUser from "../AddedUser/AddedUser";
import SortingContainer from "../Sorting/SortingContainer";
import EditUserContainer from "../EditUser/EditUserContainer";
import {useForm} from "react-hook-form";
import EditUserForm from "../EditUser/EditUserForm/EditUserForm";
import DeleteUserContainer from "../DeleteUser/DeleteUserContainer";

const Users = ({users, setEditUser, editUser}) => {
    const [deleteUser, setDeleteUser] = useState(false)
    const [idDeleteUser, setIdDeleteUser] = useState(null)

    const setDeleteUserFC = (id) => {
        setDeleteUser(true)
        setIdDeleteUser(id)
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {

        setEditUser(false)
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
                    {users.map((i) => {
                        return <div key={i.id} className={s.tableItemWrapper}>
                            {!editUser ? <div>
                                {i.user.name}
                            </div> : <EditUserForm id={i.id} register={register} errors={errors} registerName='name'
                                                   placeholder={i.user.name}/>}

                            {!editUser ? <div>
                                {i.user.lastName}
                            </div> : <EditUserForm id={i.id} register={register} errors={errors} registerName='lastName'
                                                   placeholder={i.user.lastName}/>}

                            {!editUser ? <div>
                                {i.user.username ? i.user.username : "-"}
                            </div> : <EditUserForm id={i.id} register={register} errors={errors} registerName='username'
                                                   placeholder={i.user.username ? i.user.username : "-"}/>}

                            <div>
                                {i.roles.map((roles) => {
                                    return <div key={roles.name}>{roles.name}</div>
                                })}
                            </div>

                            <div>
                                {i.organization.companyTitle}
                            </div>

                            <div className={s.buttonDownloadImg}>
                                <button onClick={(() => {
                                    console.log(`ЗАГРУЗИТЬ ${i.id}`)
                                })}/>
                            </div>

                            {!editUser ? <div className={s.buttonWrapperForm}>
                                <EditUserContainer id={i.id} setEditUser={setEditUser}/>
                                <button onClick={(() => {
                                    setDeleteUserFC(i.id)
                                })}/>
                            </div> : <input
                                className={s.updateUserButton}
                                type='submit'
                                value='Обновить'
                            />}
                        </div>
                    })}
                </form>
                {deleteUser && <DeleteUserContainer setDeleteUser={setDeleteUser} deleteUser={deleteUser}/>}
            </div>

            <div className={s.footerButtonWrapper}>
                <Pagination/>
                <AddedUser/>
            </div>

        </div>
    </div>)
        ;
};
export default Users;
