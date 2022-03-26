import React, {useEffect, useState} from 'react';
import Users from "./Users";
import {getUsers} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const initialize = useSelector((state) => state.initialize);
    const [editUser, setEditUser] = useState(false)


    useEffect(() => {
            dispatch(getUsers())
        }, []
    )


    if (!initialize) {
        return <Preloader/>
    }

    return (
        <>
            <Users users={users} setEditUser={setEditUser} editUser={editUser}/>
        </>
    );
};

export default UsersContainer;
