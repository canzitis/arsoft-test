import React from "react";
import s from './EditUserForm.module.scss'
import {useSelector} from "react-redux";

const EditUserForm = ({register, errors, registerName, type = 'text', placeholder, id, select}) => {
    const users = useSelector((state) => state.users);

    return <>
        {users.map((item) => {
            return item.id === id && <div key={item.id} className={s.editUserFormContainer}>
                {select ?
                    <div>
                        <select {...register(registerName, {
                            required: true,
                        })}>
                            {item.roles.map((roles) => {
                                return <option key={roles.name}>{roles.name}</option>
                            })}
                        </select>
                    </div> : <input
                        defaultValue={placeholder && placeholder}
                        maxLength={15}
                        minLength={3}
                        type={type}
                        style={{border: errors.lastName && "solid 1px #D91313"}}
                        {...register(registerName, {
                            required: true,
                        })}
                    />}
            </div>
        })}
    </>

}
export default EditUserForm;
