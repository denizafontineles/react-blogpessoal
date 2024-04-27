import './Home.css';

/*  Props ou Propriedades, são formas de passar informações de um Componente
    para outro componente através de parâmetros dos Componentes

    Props são os parametros dos Componentes
*/

// Definindo as Props do componente Home através de um interface
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


