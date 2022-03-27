import s from './DeleteUser.module.scss'

const DeleteUser = ({setDeleteUser}) => {

    return <div className={s.deleteUserContainer}>
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
