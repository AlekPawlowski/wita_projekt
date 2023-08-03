import { Fragment, useState } from 'react'
import './App.css'
import { supabase } from './config'


function App() {
    const login = async () => {
        let { data, error } = await supabase.auth.signUp({
            email: 'admin@admin.pl',
            password: 'bJKjndajEHiDdnlKoMnm'
        })
        console.log(data, error);
        const { dataSend, errorSend } = await supabase
            .from('app_users')
            .insert([
                { id: data.user?.id, email: 'admin@admin.pl' },
            ])

        console.log(dataSend, errorSend);

    }
    const getData = async () => {
        let { data, error } = await supabase
            .from('app_users')
            .select('*')
        console.log("as", data, error)
    }

    getData();

    return (
        <Fragment>
            <button onClick={login}>login</button>
        </Fragment>
    )
}

export default App
