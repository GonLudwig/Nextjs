export default function repeticao1(props) {
    const listaAprovados = [
        'Joao',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]
    
    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

function renderizarLista() {
    const lista = []

    for (let i = 0; i < listaAprovados.length; i++) {
        lista.push(<li key={i}>{listaAprovados[i]}</li>)
    }
    return lista 
}