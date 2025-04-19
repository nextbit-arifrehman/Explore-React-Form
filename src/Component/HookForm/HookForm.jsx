import React from 'react';
import useInputField from '../../Hooks/UseInputField';

const HookForm = () => {
    const [name,nameOnchange]=useInputField('');
    const [email,emailOncHange]=useInputField('');
    const [password,onchangePassword]=useInputField('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("submit",name ,email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text"defaultValue={name} 
                onChange={nameOnchange} /> <br />

                <input type="email" 
                onChange={emailOncHange} /> <br />
                <input type="password" onChange={onchangePassword} /> <br />

                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;