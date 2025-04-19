import { useState } from "react";

const useInputField = (defaultValue) =>{

const [fieldValue,setFieldValue]=useState(defaultValue);

const handleFieldONchange =(e)=>{
    setFieldValue(e.target.value);
}
return [fieldValue,handleFieldONchange];
}

export default useInputField;