import React, { useState } from 'react';

const ControlField = () => {
    const [password, setPassword] = useState('');

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Password:", password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" /> <br />
                <input
                    type="password"
                    onChange={handlePasswordOnChange}
                    defaultValue={password}
                    required
                    placeholder="Password"
                /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlField;
