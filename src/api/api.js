import axios from "axios";

export const api = {

    getUsers(page = 0) {
        debugger
        return axios.get(`/account/api?page=${page}`, {
            auth: {
                username: 'superuser',
                password: 'superuser'
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
        return axios.put(`/account/edit/`, {
            id: idUserEdit,
            name: dataUser.name,
            last_name: dataUser.lastName,
            user_name: dataUser.username,
            email: dataUser.username,
            roles: [
                {
                    name: dataUser.roles
                }
            ]
        }, {
            auth: {
                username: 'superuser',
                password: 'superuser'
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

    addedUser(user) {
        debugger
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
                    birth_date: user.date,
                    company_title: user.companyTitle,
                    email: user.email,
                    password: user.pass
                }, {
                    auth: {
                        username: "superuser",
                        password: "superuser"
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
