import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

/* A renderização condicional em React é uma técnica usada para 
renderizar diferentes elementos ou componentes com base em determinadas condições. 
Em outras palavras, é uma maneira de controlar quais elementos são exibidos 
na interface do usuário com base em alguma lógica definida pelo desenvolvedor. */

{/* 
function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="container">
            {
                loggedIn ? (<h1>Bem-vindo de volta!</h1>)
                    : (<button onClick={() => setLoggedIn(true)}>Entrar</button>)
            }
        </div>
    );
}

*/}

const Login = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2 className="text-slate-900 text-5xl   m-4">Login</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    Login useNavigate
                </button>
                <Link to='/home' className='hover:underline  mx-4'>Login por Link</Link>
            </div>

        </div>
    )
}


export default Login;