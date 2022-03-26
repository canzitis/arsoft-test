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
}
export default api;


