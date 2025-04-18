import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef =useRef("");
    const PasswordRef =useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const Password = PasswordRef.current.value;
        console.log(email,Password)
    }

    return (
        <div>
            <form >
          <input ref={emailRef} type="email" name='email'  /> <br />
          <input ref={PasswordRef} type="Password" name='' /> <br />
           <input type="Submit" value='Submit' />

            </form>
        </div>
    );
};

export default UncontrolledField;