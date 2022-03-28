import DeleteUser from "./DeleteUser";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/app-reducer";

const DeleteUserContainer = ({setModeDeleteUser, modeDeleteUser, mailDeleteUser}) => {
    const dispatch = useDispatch();

    const DeleteUserFc = (email) => {
        dispatch(deleteUser(email))
    }

    return <>
        <DeleteUser setModeDeleteUser={setModeDeleteUser} modeDeleteUser={modeDeleteUser}
                    mailDeleteUser={mailDeleteUser} DeleteUserFc={DeleteUserFc}/>
    </>
}
export default DeleteUserContainer
