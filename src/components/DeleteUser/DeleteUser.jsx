import s from './DeleteUser.module.scss'
import {useEffect, useRef} from "react";

const DeleteUser = ({setDeleteUser, deleteUser}) => {
    const deleteUserContainerRef = useRef();

    useEffect(() => {
        if (!deleteUserContainerRef.current) return;

        if (deleteUser) {
            deleteUserContainerRef.current.style.visible = 'visible'
            deleteUserContainerRef.current.style.opacity = '1'
        } else {
            deleteUserContainerRef.current.style.visible = 'hidden'
            deleteUserContainerRef.current.style.opacity = '0'
        }
    }, [deleteUser])

    return <div className={s.deleteUserContainer} ref={deleteUserContainerRef}>
        <div>
            <h4>Вы действительно хотите удалить пользователя?</h4>
            <div className={s.deleteUserButtonWrapper}>
                <button onClick={() => setDeleteUser(false)}>Нет</button>
                <button>Да</button>
            </div>
        </div>
    </div>
}
export default DeleteUser;
