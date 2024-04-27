// Exemplo de Interfaces

/* Interfaces descrevem a estrutura do objeto, o que significa que descreve 
como o objeto deve se parecer. */

// Aqui criamos uma Interface com três propriedades
interface PessoaProps {
    nome: string
    idade: number
    nacionalidade: string
}

// Indicamos que o objeto pessoa possui a estrutura da interface PessoaProps
let Pessoa: PessoaProps