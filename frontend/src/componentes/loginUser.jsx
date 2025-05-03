import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { NombreContexto} from './Contexto'

export function LogInUser() {


  localStorage.setItem("token", '');
   const {handleChange, enviacredencialesAWS, validaToken, setIsLoggedIn,user,pass,setUser,setPass,setTitulo,setAutor} = useContext(NombreContexto)
   const nav = useNavigate();

   const handleSubmit = async event => {
     event.preventDefault()
     setPass("")
     setUser("")     
     setTitulo("")   
     setAutor("")

     const retorna = await enviacredencialesAWS(user, pass)
     const res = await validaToken(retorna)
     
     if(res.statusCode !== 401){
      setIsLoggedIn(true)
     }else{setIsLoggedIn(false)}

     nav('/crud'); 


   };    



   return (
    <div className={'mainContainer'}>
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>

      <form onSubmit={handleSubmit}>
        <label className='username'>
            Username:
            <input className={'inputContainer'}
              type="text"
              name="username"
              placeholder='Ingrese tu username'
              onChange={handleChange}
            />
        </label>
        <label className='password'>
            Password:
            <input className={'inputContainer'}
              type="password"
              name="password1"
              placeholder='ingrese su password'
              onChange={handleChange}
            />
        </label>

        <input className='bgrhb' type='submit' ></input>

      </form >



   </div>




   )

}

