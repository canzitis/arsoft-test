import axios from "axios";

/*const initial = {
    headers: {
        "Authorization": "Basic YWRtaW46YWRtaW4="
    }
}*/

const api = {
    getUsers() {
        return axios.get(`/account/api?page=0`, {
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

    editUser(data, idUserEdit) {
        return axios.put(`/account/edit/${idUserEdit}`, {
            user: {
                name: data.name,
                lastName: data.lastName,
                username: data.username,
                roles: [
                    {
                        name: data.roles
                    }
                ]
            }
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
}
export default api;


