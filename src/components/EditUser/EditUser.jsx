import React from "react";

const EditUser = ({id, setEditUser}) => {
    return <>
        <button onClick={(() => {
            setEditUser(true)
        })}/>
    </>
}
export default EditUser;
