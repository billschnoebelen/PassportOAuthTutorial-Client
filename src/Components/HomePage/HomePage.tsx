import React, { useContext } from 'react'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'

export default function HomePage() {
    const userObject = useContext(myContext) as IUser
    return (
        <div>
            {userObject ? (<div><h1>HomePage</h1>
                <p>Welcome back {userObject.username}</p>
            </div>) : <h1>Welcome to my website</h1>
            }
        </div>
    )
}
