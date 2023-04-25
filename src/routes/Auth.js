import React, { useState } from "react";

export default () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === 'email'){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return(
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Email" required value={email} name="email" onChange={onChange}/>
            <input type="password" placeholder="Password" required value={password} name="password" onChange={onChange}/>
            <input type="submit" value="Log In"/>
        </form>
        <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
        </div>
    </div>
    )
}