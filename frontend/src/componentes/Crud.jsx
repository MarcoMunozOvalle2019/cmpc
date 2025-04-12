import Buscar from "./buscar";
import { NombreContexto } from './Contexto'//cambio
import {useContext} from 'react' 

const Crud = () => {
const {isLoggedIn} = useContext(NombreContexto)
return (
    <div>
      {isLoggedIn
        ? 
        <div>
        <h1>CRUD</h1>
            <Buscar/>
        </div>
        : 
        <div>
        <h1>No Autorizado</h1>
        </div>
      }
    </div>
   )

  };
  
  export default Crud;


