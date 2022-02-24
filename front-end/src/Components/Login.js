import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue} from '../StateProvider'
// import { actionTypes } from '../Reducer'

const Login = () => {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)
                var credential = result.credential;
                const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`

                dispatch({
                    type: "SET_USER",
                    user:{
                        displayName:result.user.displayName,
                        photoURL:photoURL                        
                    }
                })

            }).catch(error => alert(error))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                {/* <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt="fb circle" /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text"/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
