import EditUser from "./EditUser";

const EditUserContainer = ({id,setEditUser}) => {

    return <>
        <EditUser id={id} setEditUser={setEditUser}/>
    </>
}
export default EditUserContainer;
