import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Login() {


    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [parool, setParool] = useState('')

    useEffect(() => {
        if(localStorage.getItem('loggedIn')){
            setLoggedIn(true)
        }
    }, [])

    async function logOut(){
        let {error: signOutError} = await supabase.auth.signOut()
        if(signOutError){
            alert(signOutError)
        }
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
    }

    async function signIn(e) {
        e.preventDefault()

        let { data: signInData, error: signInError} = await supabase.auth.signInWithPassword({
            email: email,
            password: parool
        })
        

        if(signInError){
            alert(signInError)
            return
        }
        
        localStorage.setItem('loggedIn', true)

        setLoggedIn(true)

    }
    
    if(loggedIn){
        return(
            <>
                <button onClick={logOut}>LOGI VÄLJA</button>
            </>
        )
    }else{
        return(
            <>
                <form onSubmit={(event) => {signIn(event)}}>
                    <label htmlFor="email"> Email </label>
                    <input type='email' name='email' onChange={e => (setEmail(e.target.value))} />
                    <label htmlFor="parool"> Parool </label>
                    <input type='password' name='parool' onChange={e => (setParool(e.target.value)) }/>
                    <button type="submit">LOGI SISSE</button>
                </form>
                <h3><a href='/signup'>Või loo konto</a></h3>
            </> 
            
        )
        
    }  
}
    


export default Login