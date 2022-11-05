import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'

export default function HomePage() {
    const userObject = useContext(myContext) as IUser
    const [documentId, setDocumentId] = useState<any>()
    const [workspaceId, setWorkspaceId] = useState<any>()
    const [elementId, setElementId] = useState<any>()
    const [server, setServer] = useState<any>()



    // var documentId;
    // var workspaceId;
    // var elementId;
    // var server;

    useEffect(() => {

        // Parse query parameters
        const queryParameters = decodeURIComponent(
            window.location.search.substring(1)
        );
        const queryParametersArray = queryParameters.split("&");
        for (var i = 0; i < queryParametersArray.length; i++) {
            const parameterArray = queryParametersArray[i].split("=");
            if (parameterArray.length === 2) {
                switch (parameterArray[0]) {
                    case 'documentId':
                        setDocumentId(parameterArray[1]);
                        break;
                    case 'workspaceId':
                        setWorkspaceId(parameterArray[1]);
                        break;
                    case 'elementId':
                        setElementId(parameterArray[1]);
                        break;
                    case 'server':
                        setServer(parameterArray[1]);
                        break;
                    default:
                        break;
                }
            }
        }

    }, [setDocumentId, setWorkspaceId, setElementId, setServer]);

    // Listen for clicks and post a message to the Onshape client
    // document.getElementById('<id of your topmost element>').
    //     addEventListener('click', function () {
    //         var message = {
    //             documentId: documentId,
    //             workspaceId: workspaceId,
    //             elementId: elementId,
    //             messageName: 'closeFlyoutsAndMenus'
    //         };
    //         window.parent.postMessage(message, '*');
    //     }, true);



    return (
        <div>
            {userObject ? (<div><h1>HomePage</h1>
                <p>Welcome back {userObject.username}</p>
            </div>) : <h1>Welcome to my website</h1>
            }
            <p>{document.URL}</p>
            <ul>
                <li>documentId: {documentId}</li>
                <li>workspaceId: {workspaceId}</li>
                <li>elementId: {elementId}</li>
                <li>server: {server}</li>
                <li></li>
            </ul>
        </div>
    )
}

// https://legendary-axolotl-5825c7.netlify.app/?documentId=10df3c89dea206b924d9c222&workspaceId=60fff50c39aa154e318f39f3&originalWorkspaceId=60fff50c39aa154e318f39f3&elementId=bb697dc29018337abe3b1565&elementType=application&server=https%3A%2F%2Fcad.onshape.com&userId=54e3dea4e4b0b6bc3c726c26&companyId=5a998a245618f7127b13d921&documentState=workspace&defaultWorkspaceName=Main&debug=false&showReturnToWorkspaceLink=false&showRestoreToWorkspaceLink=false&debugjs=false&debuglog=false&debugfeatures=false&clientId=F43FZ42ZVATSLCDNPHJDEAGTI67KZZ6KQMIL7TQ%3D&access=edit&locale=en-US
