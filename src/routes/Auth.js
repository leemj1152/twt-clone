import React, { useState } from "react";
import { authService } from "../fbase";

export default () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === 'email'){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data
            if(newAccount){
                //create account
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data)
        } catch(error){
            console.log(error);
        }
        
    }
    return(
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Email" required value={email} name="email" onChange={onChange}/>
            <input type="password" placeholder="Password" required value={password} name="password" onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        </form>
        <div>
            <button name="google">Continue with Google</button>
            <button name="github">Continue with Github</button>
        </div>
    </div>
    )
}