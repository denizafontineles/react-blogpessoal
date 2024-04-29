import { useNavigate, Link } from 'react-router-dom'

import homeLogo from '../../assets/logo.jpg'


/*  Props ou Propriedades, são formas de passar informações de um Componente
    para outro componente através de parâmetros dos Componentes

    Props são os parametros dos Componentes
*/

// Definindo as Props do componente Home através de um interface

{/* 

interface HomeProps {
    title: string;
    description: string;
}

// Indicamos que o Card recebe as props. titulo, descricao da Interface CardProps

function Home({ title, description }: HomeProps) {
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

*/}

// const Home = () => {
//     let navigate = useNavigate()
//     return (

//         <div>
//             <h2 className="text-slate-900 text-5xl  m-4">Home</h2>
//             <div>
//                 <button type='submit'
//                     className='hover:underline mx-4'
//                     onClick={() => { navigate('/login') }}>
//                     Login useNavigate
//                 </button>
//                 <Link to='/login' className='hover:underline mx-4'>Login por Link</Link>
//             </div>

//         </div>

//     )
// }


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            {/* <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
            </div> */}

          </div>
        </div>
      
      </>
    );
}

export default Home;

/* 

function Home(props:HomeProps){
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

*/


