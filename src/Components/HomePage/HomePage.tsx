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
            <p>{document.URL}</p>
        </div>
    )
}

// https://legendary-axolotl-5825c7.netlify.app/?documentId=10df3c89dea206b924d9c222&workspaceId=60fff50c39aa154e318f39f3&originalWorkspaceId=60fff50c39aa154e318f39f3&elementId=bb697dc29018337abe3b1565&elementType=application&server=https%3A%2F%2Fcad.onshape.com&userId=54e3dea4e4b0b6bc3c726c26&companyId=5a998a245618f7127b13d921&documentState=workspace&defaultWorkspaceName=Main&debug=false&showReturnToWorkspaceLink=false&showRestoreToWorkspaceLink=false&debugjs=false&debuglog=false&debugfeatures=false&clientId=F43FZ42ZVATSLCDNPHJDEAGTI67KZZ6KQMIL7TQ%3D&access=edit&locale=en-US
