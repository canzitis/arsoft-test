import React from 'react';
import s from './Users.module.scss'
import Pagination from "../Pagination/Pagination";
import AddedUser from "../AddedUser/AddedUser";

const Users = ({users}) => {
    return (<div className={s.container}>
        <div className={s.usersWindow}>
            <div className={s.tableUsersContainer}>
                <div>
                    <div><b>Имя</b>
                        <button onClick={() => {
                            console.log(`СОРТ`)
                        }}/>
                    </div>
                    <div><b>Фамилия</b>
                        <button onClick={() => {
                            console.log(`СОРТ`)
                        }}/>
                    </div>
                    <div><b>Username</b>
                        <button onClick={() => {
                            console.log(`СОРТ`)
                        }}/>
                    </div>
                    <div><b>Роль</b>
                        <button onClick={() => {
                            console.log(`СОРТ`)
                        }}/>
                    </div>
                    <div><b>Организация</b>
                        <button onClick={() => {
                            console.log(`СОРТ`)
                        }}/>
                    </div>
                    <div><b>Изображения</b></div>
                </div>

                {users.map((i) => {
                    return <div key={i.id} className={s.tableItemWrapper}>
                        <div>
                            {i.user.name}
                        </div>
                        <div>
                            {i.user.lastName}
                        </div>
                        <div>
                            {i.user.username ? i.user.username : "-"}
                        </div>
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
                        <div className={s.buttonWrapperForm}>
                            <button onClick={(() => {
                                console.log(`РЕДАКТИРОВАТЬ ${i.id}`)
                            })}/>

                            <button onClick={(() => {
                                console.log(`УДАЛИТЬ ${i.id}`)
                            })}/>
                        </div>
                    </div>
                })}
            </div>

            <div className={s.footerButtonWrapper}>
                <Pagination/>
                <AddedUser/>
            </div>

        </div>
    </div>);
};
export default Users;
