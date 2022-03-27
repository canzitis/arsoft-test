import React from "react";

const EditUser = ({id,setIdUserEdit}) => {
    return <>
        <button onClick={(() => {
            setIdUserEdit(id)
        })}/>
    </>
}
export default EditUser;
