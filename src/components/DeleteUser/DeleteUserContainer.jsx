import DeleteUser from "./DeleteUser";

const DeleteUserContainer = ({setDeleteUser,deleteUser}) => {
    return <>
        <DeleteUser setDeleteUser={setDeleteUser} deleteUser={deleteUser}/>
    </>
}
export default DeleteUserContainer
