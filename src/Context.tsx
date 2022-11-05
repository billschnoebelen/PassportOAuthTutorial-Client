import React, { createContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const myContext = createContext({})

export default function Context(props: any) {
    const [userObject, setUserObject] = useState<any>()

    useEffect(() => {

        axios.get("https://server-passportoauthtutorial.herokuapp.com/getUser", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log("getUser", res)
                setUserObject(res.data)
            }
        })

    }, []);
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
