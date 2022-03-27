import React, {useEffect} from 'react';
import Users from "./Users";
import {getUsers} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const initialize = useSelector((state) => state.initialize);


    useEffect(() => {
            dispatch(getUsers())
        }, []
    )


    if (!initialize) {
        return <Preloader/>
    }

    return (
        <>
            <Users users={users}/>
        </>
    );
};

export default UsersContainer;
