import React from "react";
import 'react-multi-carousel/lib/styles.css';
import { NombreContexto } from './Contexto'
import { useContext,useEffect,useState} from 'react' 
import { useNavigate } from 'react-router-dom'


const Modifica = () => {
  const nav = useNavigate();
  
  const {id,buscarLibros,handleChange,actualizaLibro} = useContext(NombreContexto)

  const actualiza=async()=>{
    const seek=async()=>{
      let libros = await buscarLibros(); 
    }
    seek()         
 }

  const handleSubmit = async event => {
    event.preventDefault()
    let libros=await actualizaLibro(id); 
    actualiza()
    nav('/crud');
  };  

  
  return (
       <div  className={'AgregaDatos'}>
          
            <form onSubmit={handleSubmit}>

                <label>
                    Titulo:
                    <input 
                      type="text"
                      name="Titulo"
                      placeholder='Ingrese titulo'
                      onChange={handleChange}
                    />
                </label>
                <label>
                    Autor:
                    <input 
                      type="text"
                      name="Autor"
                      placeholder='ingrese autor'
                      onChange={handleChange}
                    />
                </label>
                <label>
                    Editorial:
                    <input 
                      type="text"
                      name="Editorial"
                      placeholder='ingrese editorial'
                      onChange={handleChange}
                    />
                </label>
                <label>
                    Precio:
                    <input 
                      type="text"
                      name="Precio"
                      placeholder='ingrese precio'
                      onChange={handleChange}
                    />
                </label>
                <label>
                    Disponibilidad:
                    <input 
                      type="text"
                      name="Disponibilidad"
                      placeholder='ingrese disponibilidad'
                      onChange={handleChange}
                    />
                </label>
                <label>
                Genero:
                    <input 
                      type="text"
                      name="Genero"
                      placeholder='ingrese genero'
                      onChange={handleChange}
                    />
                </label>

                <input className='AgregaLibro' type='submit' ></input>
              </form >



      </div>
  );
}

export default Modifica;
