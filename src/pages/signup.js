import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Login() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [eesnimi, setEesnimi] = useState('')
    const [perenimi, setPerenimi] = useState('')
    const [isikukood, setIsikukood] = useState('')
    const [parool, setParool] = useState('')

    useEffect(() => {
        if(localStorage.getItem('loggedIn')){
            setLoggedIn(true)
        }
    }, [])

    async function signUp(e) {
        e.preventDefault()

        let { data: signUpData, error: signUpError} = await supabase.auth.signUp({
            email: email,
            password: parool
        })
        
        if(!signUpError){
            let { data: insertUserData, error: insertUserError } = await supabase.from('kasutaja').insert([
                {id: signUpData.user.id,
                eesnimi: eesnimi,
                perenimi: perenimi,
                isikukood: isikukood,
                roll: 'lugeja'}
            ])
            if(insertUserError){
                alert(insertUserError.details)

            }
            localStorage.setItem('loggedIn', true)
            setLoggedIn(true)
        } else {
            alert(signUpError)
        }
    }

    async function logOut(){
        let {error: signOutError} = await supabase.auth.signOut()
        if(signOutError){
            alert(signOutError)
        }
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
    }
    
    if(loggedIn){
        return(
            <>
                <button onClick={logOut}>LOGI VÄLJA</button>
            </>
        )
    }else{

    return (
        <form onSubmit={(event) => {signUp(event)}}>
            <label htmlFor="email"> Email </label>
            <input type='email' name='email' onChange={e => (setEmail(e.target.value))} />
            <label htmlFor="eesnimi"> Eesnimi</label>
            <input type='text' name='eesnimi' onChange={e => (setEesnimi(e.target.value)) } />
            <label htmlFor="perenimi"> Perenimi </label>
            <input type='text' name='perenimi' onChange={e => (setPerenimi(e.target.value)) } />
            <label htmlFor="isikukood"> Isikukood </label>
            <input type='text' name='isikukood' onChange={e => (setIsikukood(e.target.value)) }/>
            <label htmlFor="parool"> Parool </label>
            <input type='password' name='parool' onChange={e => (setParool(e.target.value)) }/>
            <button type="submit">LOO KONTO</button>
        </form>
    )}
}
    


export default Login