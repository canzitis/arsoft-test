import React, {useEffect, useState} from "react";
import Sorting from "./Sorting";
import {useDispatch, useSelector} from "react-redux";
import {sortData} from "../../redux/app-reducer";

const SortingContainer = ({id}) => {
    const usersData = useSelector((state) => state.users);
    const initialUser = useSelector((state) => state.initialUser);
    const [newUserData, setNewUserData] = useState([]);
    const [sortType, setSortType] = useState(0)
    const dispatch = useDispatch();


    useEffect(() => {
        setNewUserData(usersData.concat())
        setSortType(1)
    }, [id])


    const changeSortType = () => {
        if (sortType === 0) {
            setSortType(1)
        } else if (sortType === 1) {
            setSortType(-1)
        } else {
            setSortType(0)
        }
    }

    const Sort = (column) => {
        newUserData.sort((a, b) => {
            if (sortType === 1) {
                return a.user[column] > b.user[column] ? 1 : -1;
            }
            if (sortType === -1) {
                return a.user[column] > b.user[column] ? -1 : 1;
            }
        })
        return dispatch(sortData(newUserData))
    }

    const SortData = (id) => {
        changeSortType()

        if (sortType === 0) {
            return dispatch(sortData(initialUser))
        }
        switch (id) {
            case "roles": {
                //TODO: Сортировка по роли невозможна.
                return console.log('Сортировка по роли невозможна')
            }
            case "organization": {
                newUserData.sort((a, b) => {
                    if (a.organization.companyTitle > b.organization.companyTitle) {
                        return a.organization.companyTitle > b.organization.companyTitle ? 1 : -1;
                    } else {
                        return a.organization.companyTitle > b.organization.companyTitle ? -1 : 1;
                    }
                })
                return dispatch(sortData(newUserData))
            }
            default:
                return Sort(id);
        }
    }

    return <>
        <Sorting id={id} SortData={SortData}/>
    </>
}
export default SortingContainer;
