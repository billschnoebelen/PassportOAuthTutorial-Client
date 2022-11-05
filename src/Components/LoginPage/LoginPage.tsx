import React from 'react'
import onshapeImage from "../../assets/onshapeImage.png"
import styles from "./LoginPage.module.css"

export default function LoginPage() {

    const onshapeLogin = () => {
        window.open("https://server-passportoauthtutorial.herokuapp.com/auth/onshape", "_self");
    }

    return (
        <div className={styles.loginPage}>

            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={`${styles.googleContainer} ${styles.onshapeContainer}`} onClick={onshapeLogin}>
                    <img src={onshapeImage} alt="onshape" />
                    <p>Login with Onshape</p>
                </div>
            </div>

        </div>
    )
}
