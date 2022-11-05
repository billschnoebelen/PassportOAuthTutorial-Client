import axios, { AxiosResponse } from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'
import styles from "./NavBar.module.css"


export default function NavBar() {
    const userObject = useContext(myContext) as IUser;


    const logout = () => {
        axios.post("https://server-passportoauthtutorial.herokuapp.com/auth/logout", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data === "done") {                 


                window.location.href = "/login"
            }
        })
    }

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBar}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {userObject ?
                        <li onClick={logout}>Logout</li>
                        :
                        <li><Link to="/login">Login</Link></li>}
                </ul>
            </div>
        </div>
    )
}
