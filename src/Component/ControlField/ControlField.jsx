import React, { useState } from 'react';

const ControlField = () => {
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');

    const handlePasswordOnChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        console.log(newPassword); // log each updated value

        if(password.length <6 ){
            setError("Password must be 6 charecters or longer.")
        }
        else{
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Final Password:", password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="Email" name="Email" placeholder="Email" /> <br />
                <input
                    type="password"
                    onChange={handlePasswordOnChange}
                    value={password}
                    required
                    placeholder="Password"
                /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlField;

