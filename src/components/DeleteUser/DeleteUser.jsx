import s from './DeleteUser.module.scss'

const DeleteUser = ({setModeDeleteUser, DeleteUserFc, mailDeleteUser}) => {
    debugger
    return <div className={s.deleteUserContainer}>
        <div>
            <h4>Вы действительно хотите удалить пользователя?</h4>
            <div className={s.deleteUserButtonWrapper}>
                <button onClick={() => {
                    setModeDeleteUser(false)
                }}>Нет
                </button>
                <button onClick={() => {
                    DeleteUserFc(mailDeleteUser)
                }}>Да
                </button>
            </div>
        </div>
    </div>
}
export default DeleteUser;
