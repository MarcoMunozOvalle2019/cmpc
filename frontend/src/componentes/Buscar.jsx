
import { NombreContexto } from './Contexto'
import { useContext,useEffect,useState} from 'react' 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom'
import Crear from './Crear';


const Buscar = () => {
  const [words, setWords] = useState([])
  const {id,setId,editorial, precio, disponibilidad,genero,titulo,autor,handleChange,buscarLibros,agregaLibro, reporteLibros,eliminaLibros,actualizaLibro,setAutor} = useContext(NombreContexto)
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

  const reporte=async()=>{
    libros = await reporteLibros(); 
  }

  const actualizaData=async(id)=>{    
    nav('/modificar');
    setId(id) 
  }
  const crearData=async()=>{    
    nav('/crear');
  }
 
  
  const actualiza=async()=>{
    const seek=async()=>{
      libros = await buscarLibros(); 
      setWords(libros)
    }
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


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const nav = useNavigate();


return (

    <div>
        <Carousel responsive={responsive}>
          {words.map((item, index) => (
            <div key={index}>
                {item.id}
                <div style={{ fontSize: '15px', border: '1px solid #000', padding: '120px', margin: '2px' }}>
                Titulo
                    <input 
                      type="text"
                      name="Titulo"
                      placeholder={item.titulo}
                      onChange={handleChange}
                    />
                Autor:
                    <input 
                      type="text"
                      name="Autor"
                      placeholder={item.autor}
                      onChange={handleChange}
                    />
                Editorial:
                    <input 
                      type="text"
                      name="Editorial"
                      placeholder={item.editorial}
                      onChange={handleChange}
                    />
                Genero:
                    <input 
                      type="text"
                      name="Genero"
                      placeholder={item.genero}
                      onChange={handleChange}
                    />
                Precio:
                    <input 
                      type="text"
                      name="Precio"
                      placeholder={item.precio}
                      onChange={handleChange}
                    />
                Disponibilidad:
                    <input 
                      type="text"
                      name="Disponibilidad"
                      placeholder={item.disponibilidad}
                      onChange={handleChange}
                    />
                {/* <img src={item}/> */}

                <button  onClick={()=>{ elimina(item.id) }}>
                  Delete
                </button>
                <button  onClick={()=>{ actualizaData(item.id)  }}>
                  Actualiza
                </button>



                <div>
             </div>
             </div>
    </div>              
        
        ))}

        
        </Carousel>





      <button className='Csv' onClick={()=>{ reporte() }}>
          Reporte csv
      </button>

      <button  onClick={()=>{ crearData()  }}>
          Crear
      </button>


       {/* <div >
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
        </div> */}



    </div>
   )

  };
  
  export default Buscar;


