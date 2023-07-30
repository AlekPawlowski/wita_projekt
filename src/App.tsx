import { Fragment, useState } from 'react'
import './App.css'
import { supabase } from './config'


function App() {
    const login = async () => {
        let { data, error } = await supabase.auth.signUp({
            email: 'tes@test.pl',
            password: 'bJKjndajEHiDdnlKoMnm'
        })
        console.log(data, error);
        const { dataSend, errorSend } = await supabase
            .from('app_users')
            .insert([
                { id: data.user?.id },
            ])

        console.log(dataSend, errorSend);
        
    }


    return (
        <Fragment>
            <button onClick={login}>login</button>
        </Fragment>
    )
}

export default App
