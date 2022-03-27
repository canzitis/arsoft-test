import axios from "axios";

export const api = {
    getUsers(page = 0) {
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
        console.log(user)
        switch (user.roles) {
            case "Администратор":
                return axios.post(`/auth/reg/admin`, {
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
