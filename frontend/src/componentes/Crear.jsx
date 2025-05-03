import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom'
import { NombreContexto } from './Contexto'
import { useContext,useEffect,useState} from 'react' 




const Crear = () => {

  const {editorial, precio, disponibilidad,genero,titulo,autor,handleChange,buscarLibros,agregaLibro} = useContext(NombreContexto)
  const [words, setWords] = useState([])
  const nav = useNavigate();
  const actualiza=async()=>{
    const seek=async()=>{
      let libros = await buscarLibros(); 
      setWords(libros)
    }
    seek()         
 }

 const handleSubmit = async event => {
  event.preventDefault()
  const seek=async()=>{
    let libros = await agregaLibro(titulo,autor,editorial, precio, disponibilidad,genero); 
    actualiza()
  }
  seek()    
  nav('/crud'); 
};  
 


  return (
    <div >
    <div  className={'AgregaDatos'}>
      <h1>Libro</h1>
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
</div>

  );
}

export default Crear;
