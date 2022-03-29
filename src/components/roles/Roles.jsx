import React from "react";

const Roles = ({roles}) => {
    const arrayRoles = []


    if (roles.name === "ROLE_USER") {
        arrayRoles.push(['Пользователь'])
    } else if (roles.name === "ROLE_ADMIN") {
        arrayRoles.push(['Администратор'])
    } else if (roles.name === "ROLE_SUPERUSER") {
        arrayRoles.push(['Суперпользователь'])
    } else {
        arrayRoles.push(['Пользователь', 'Администратор', 'Суперпользователь'])
    }

    return <>
        {arrayRoles.map((roles) => {
            return <div key={roles}>{roles}</div>
        })}
    </>
}

export default Roles;
