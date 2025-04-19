
import './App.css'
import ControlField from './Component/ControlField/ControlField'
import FamilyTree from './Component/FamilyTree/RootGandpa/FamilyTree'
import FormAction from './Component/FormAction/FormAction'
import HookForm from './Component/HookForm/HookForm'
import ProductMangement from './Component/ProductMangement/ProductMangement'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import UncontrolledField from './Component/UnCtrollField/UncontrolledField'

function App() {


  return (
    <>
    <h1>Explore React Form</h1>
    {/* <SimpleForm></SimpleForm> 
     <FormAction></FormAction> 
     <ControlField></ControlField>
    <UncontrolledField></UncontrolledField>
     <HookForm></HookForm> */}
     {/* <ProductMangement></ProductMangement> */}
     <FamilyTree></FamilyTree>
    </>
  )
}

export default App
