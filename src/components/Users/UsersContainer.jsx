import React, {useEffect, useState} from 'react';
import Users from "./Users";
import {getUsers} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [count, setCount] = useState(1)
    const initialize = useSelector((state) => state.initialize);


    useEffect(() => {
            dispatch(getUsers())
            setCount(users && users.length)
        }, []
    )

    if (!initialize) {
        return <Preloader/>
    }

    return (
        <>
            <Users users={users} count={count}/>
        </>
    );
};

export default UsersContainer;
