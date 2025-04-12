
import { NombreContexto } from './Contexto'//cambio
import { useContext,useEffect,useState} from 'react' 

const Buscar = () => {
  const [words, setWords] = useState([])
  const {editorial, precio, disponibilidad,genero,titulo,autor,handleChange,buscarLibros,agregaLibro, eliminaLibros,actualizaLibro} = useContext(NombreContexto)
  let libros=[]

  useEffect(() => {
     const seek=async()=>{
       libros = await buscarLibros(); 
       setWords(libros)}
     seek()         
   }, []);

  const elimina=async(id)=>{
    libros = await eliminaLibros(id); 
    actualiza()
  }

  const actualizaData=async(id)=>{
    libros = await actualizaLibro(id); 
    actualiza()
  }
  
  const actualiza=async()=>{
    const seek=async()=>{
      libros = await buscarLibros(); 
      setWords(libros)}
    seek()         
 }

 const handleSubmit = async event => {
  event.preventDefault()
  const seek=async()=>{
    libros = await agregaLibro(titulo,autor,editorial, precio, disponibilidad,genero); 
    actualiza()
  }
  seek()    
};  


return (
    <div>
      
       <div >
            <div  className={'AgregaDatos'}>
              


            <form onSubmit={handleSubmit}>

                <label className='AgregaTitulo'>
                    Titulo:
                    <input 
                      type="text"
                      name="Titulo"
                      placeholder='Ingrese titulo'
                      onChange={handleChange}
                    />
                </label>
                <label className='AgregaAutor'>
                    Autor:
                    <input 
                      type="text"
                      name="Autor"
                      placeholder='ingrese autor'
                      onChange={handleChange}
                    />
                </label>


                
                <label className='AgregaEditorial'>
                    Editorial:
                    <input 
                      type="text"
                      name="Editorial"
                      placeholder='ingrese editorial'
                      onChange={handleChange}
                    />
                </label>
                <label className='AgregaPrecio'>
                    Precio:
                    <input 
                      type="text"
                      name="Precio"
                      placeholder='ingrese precio'
                      onChange={handleChange}
                    />
                </label>
                <label className='AgregaDisponibilidad'>
                    Disponibilidad:
                    <input 
                      type="text"
                      name="Disponibilidad"
                      placeholder='ingrese disponibilidad'
                      onChange={handleChange}
                    />
                </label>
                <label className='AgregaGenero'>
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


       VISUALIZAR LIBROS:
       {words.map((item) => (
        <div key={item.id}>
            <button  onClick={()=>{ elimina(item.id) }}>
                Delete
            </button>

            <button  onClick={()=>{ actualizaData(item.id) }}>
                Actualiza
            </button>

             ___ titulo={item.titulo}  :   autor={item.autor} : editorial={item.editorial}  :   precio={item.precio} : disponibilidad={item.disponibilidad}  :   genero={item.genero} 


        </div>        


      ))}      

    </div>
   )

  };
  
  export default Buscar;


