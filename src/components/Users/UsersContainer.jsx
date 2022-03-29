import React, {useEffect, useState} from 'react';
import Users from "./Users";
import {getUsers, setCurrentPage} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const fileDownloadText = useSelector((state) => state.fileDownload);
    const currentPage = useSelector((state) => state.currentPage);
    const [count, setCount] = useState(1)
    const initialize = useSelector((state) => state.initialize);

    const buttonArray = [0, 1, 2, 3, 4];

    const setCurrentPageFC = (page) => {
        dispatch(setCurrentPage(page))
    }


    useEffect(() => {
            dispatch(getUsers(currentPage))
            setCount(users && users.length)
        }, [currentPage]
    )

    if (!initialize) {
        return <Preloader/>
    }

    return (
        <>
            <Users users={users} count={count} buttonArray={buttonArray}
                   setCurrentPageFC={setCurrentPageFC} fileDownloadText={fileDownloadText}/>
        </>
    );
};

export default UsersContainer;
