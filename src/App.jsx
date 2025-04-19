
import './App.css'
import ControlField from './Component/ControlField/ControlField'
import FormAction from './Component/FormAction/FormAction'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import UncontrolledField from './Component/UnCtrollField/UncontrolledField'

function App() {


  return (
    <>
    <h1>Explore React Form</h1>
    <SimpleForm></SimpleForm> 
     <FormAction></FormAction> 
     <ControlField></ControlField>
    <UncontrolledField></UncontrolledField>
    </>
  )
}

export default App
