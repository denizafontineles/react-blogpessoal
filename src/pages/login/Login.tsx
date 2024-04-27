import { useState } from 'react';
import './Login.css'

/* A renderização condicional em React é uma técnica usada para 
renderizar diferentes elementos ou componentes com base em determinadas condições. 
Em outras palavras, é uma maneira de controlar quais elementos são exibidos 
na interface do usuário com base em alguma lógica definida pelo desenvolvedor. */

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
export default Login;