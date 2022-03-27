import React, {useEffect, useState} from "react";
import Sorting from "./Sorting";
import {useDispatch, useSelector} from "react-redux";
import {sortData} from "../../redux/app-reducer";

const SortingContainer = ({id}) => {
    const userData = useSelector((state) => state.users);
    const [newUserData, setNewUserData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewUserData(userData.concat())
    }, [id])

    const SortData = (id) => {
        switch (id) {
            case "name": {
                newUserData.sort((a, b) => {
                    if (a.user.name > b.user.name) {
                        return a.user.name > b.user.name ? 1 : -1;
                    } else {
                        return b.user.name > a.user.name ? 1 : -1;
                    }
                })
                return dispatch(sortData(newUserData))
            }
            case "lastName": {
                newUserData.sort((a, b) => {
                    if (a.user.lastName > b.user.lastName) {
                        return a.user.lastName > b.user.lastName ? 1 : -1;
                    } else {
                        return a.user.lastName < b.user.lastName ? -1 : 1;
                    }
                })
                return dispatch(sortData(newUserData))
            }
            case "userName": {
                newUserData.sort((a, b) => {
                    if (a.user.username > b.user.username) {
                        return a.user.username > b.user.username ? 1 : -1;
                    } else {
                        return a.user.username > b.user.username ? -1 : 1;
                    }
                })
                return dispatch(sortData(newUserData))
            }
            case "roles": {

                return console.log('было нажато роль')
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
                return id;
        }
    }

    return <>
        <Sorting id={id} SortData={SortData}/>
    </>
}
export default SortingContainer;
