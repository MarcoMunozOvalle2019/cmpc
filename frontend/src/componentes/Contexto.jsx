import { createContext , useState } from 'react'
export const NombreContexto = createContext()

export function Contexto(props) {
    const [user, setUser]= useState('')
    const [pass, setPass]= useState('')
    const [titulo, setTitulo]= useState('')
    const [autor, setAutor]= useState('')
    const [editorial, setEditorial]= useState('')
    const [precio, setPrecio]= useState('')
    const [disponibilidad, setDisponibilidad]= useState('')
    const [genero, setGenero]= useState('')
    const [imagenUrl, setImagenUrl]= useState('')    
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    // dejar en .env
    const URL= import.meta.env.VITE_URL || "http://localhost:3000/auth/login"
    const URL1= import.meta.env.VITE_URL || "http://localhost:3000/auth/status"
    const URL2= import.meta.env.VITE_URL || "http://localhost:3000/books"
    const URL3= import.meta.env.VITE_URL || "http://localhost:3000/books"
    const URL4= import.meta.env.VITE_URL || "http://localhost:3000/books"
    const URL5= import.meta.env.VITE_URL || "http://localhost:3000/books/csv"
    
    
    async function enviacredencialesAWS(usuario, clave){                  
      let salida
      await fetch(`${URL}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "username": usuario,
          "password": clave
         })
      })
      .then(response => response.json())
      .then(data => salida = data)
      .catch(error => console.error(error));
      salida.accesToken? localStorage.setItem("token", salida.accesToken): localStorage.setItem("token", "")
      return salida
    }


    async function validaToken(accesToken){
       let salida
       await fetch(`${URL1}`, {
         method: 'GET',
         headers: {
          'Content-Type':'application/json',
          'Authorization': "Bearer "+accesToken.accesToken
        },
       })
       .then(response => response.json())
       .then(data => salida=data)
       .catch(error => console.error(error));
       return salida
    }



    const buscarLibros = async()=>{
      let salida=[]
      await fetch(`${URL2}`, {
        method: 'GET',
        headers: {
         'Content-Type':'application/json',
       },
      })
      .then(response => response.json())
      .then(data => salida=data)
      .catch(error => console.error(error));
      return salida
   }

  const reporteLibros = async()=>{
    let salida=[]
    await fetch(`${URL5}`, {
      method: 'GET',
      headers: {
       'Content-Type':'application/json',
     },
    })
    .then(response => response.json())
    .then(data => salida=data)
    .catch(error => console.error(error));
    return salida
 }


   const eliminaLibros = async(id)=>{
    let salida
    await fetch(`${URL3}/${id}`, {
      method: 'DELETE',
      headers: {
       'Content-Type':'application/json',
     },
    })
    return salida
   }


  const actualizaLibro = async(id)=>{
    let salida
    console.log(id)
    await fetch(`${URL4}/${id}`, {
      method: 'PATCH',
      headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      "titulo": titulo,
      "autor": autor,
      "editorial":editorial, 
      "precio":precio, 
      "disponibilidad":disponibilidad,
      "genero":genero ,
      "imagenUrl":"imag"
    })   
    })
    .then(response => response.json())
    .then(data => salida=data)
    .catch(error => console.error('cayo',error));
    return salida
  }


  const agregaLibro = async(titulo,autor,editorial, precio, disponibilidad,genero)=>{
    let salida

    await fetch(`${URL4}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "titulo": titulo,
        "autor": autor,
        "editorial":editorial, 
        "precio":precio, 
        "disponibilidad":disponibilidad,
        "genero":genero
      })
  })
    .then(response => response.json())
    .then(data => salida=data)
    .catch(error => console.error(error));

    return salida
  }


    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        if(event.target.name == 'Titulo'){
          setTitulo(event.target.value)
        }
        if(event.target.name == 'Autor'){
          setAutor(event.target.value)
        }
        if(event.target.name == 'Editorial'){
          setEditorial(event.target.value)
        }
        if(event.target.name == 'Precio'){
          setPrecio(event.target.value)
        }
        if(event.target.name == 'Disponibilidad'){
          setDisponibilidad(event.target.value)
        }
        if(event.target.name == 'Genero'){
          setGenero(event.target.value)
        }
        if(event.target.name == 'password1'){
          setPass(event.target.value)
        }

        if(event.target.name == 'username'){
          setUser(event.target.value)
        }
    };
  return (
    

    <NombreContexto.Provider value={{ reporteLibros ,editorial, setEditorial,precio, setPrecio,disponibilidad, setDisponibilidad,genero, setGenero,imagenUrl, setImagenUrl,agregaLibro, eliminaLibros,actualizaLibro, buscarLibros,validaToken, enviacredencialesAWS, handleChange, user, pass,autor,titulo,isLoggedIn, setIsLoggedIn,setUser,setPass,setTitulo,setAutor}} >
        {props.children}
    </NombreContexto.Provider>
  )
}

