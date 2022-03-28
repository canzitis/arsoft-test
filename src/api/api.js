import axios from "axios";
import {deleteUser} from "../redux/app-reducer";

export const api = {

    getUsers(page = 1) {
        return axios.get(`/account/api?page=${page}`, {
            headers: {
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(`Пришла ошибка ${error}`);
            })
    },

    editUser(dataUser, idUserEdit) {
        debugger
        return axios.put(`/account/edit/`, {
            id: idUserEdit,
            name: dataUser.name,
            last_name: dataUser.lastName,
            user_name: dataUser.username,
            roles: [
                {
                    name: dataUser.roles
                }
            ]
        }, {
            headers: {
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(`Пришла ошибка ${error}`);
            })
    },

    getOrganization() {
        return axios.get(`/organization`, {
            auth: {
                username: "superuser",
                password: "superuser"
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(`Пришла ошибка ${error}`);
            })
    },

    deleteUser(email) {
        return axios.delete(`/account/${email}`, {
            headers: {
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(`Пришла ошибка ${error}`);
            })
    },

    addedUser(user) {
        switch (user.roles) {
            case "Администратор":
                console.log(user)
                return axios.post(`/auth/reg/admin`, {
                    name: user.name,
                    last_name: user.lastName,
                    birth_date: user.date,
                    company_title: user.companyTitle,
                    email: user.email,
                    password: user.pass
                }, {
                    headers: {
                        "Authorization": "Basic YWRtaW46YWRtaW4="
                    }
                }).then(response => {
                    return response
                })
                    .catch(error => {
                        return console.log(`Пришла ошибка ${error}`);
                    })
            default:
                return axios.post(`/auth/reg`, {
                    name: user.name,
                    last_name: user.lastName,
                    password: user.pass,
                    company_title: 'arSoft'
                }, {
                    headers: {
                        "Authorization": "Basic YWRtaW46YWRtaW4="
                    }
                }).then(response => {
                    return response
                })
                    .catch(error => {
                        return console.log(`Пришла ошибка ${error}`);
                    })
        }
    }
}
