export default function lista1(){
    return (
        <div>
            {lista(10)}
        </div>
    )
}

function lista(num) {
    const lista = []

    for (let index = 1; index <= num; index++) {
        lista.push(<span>{index},</span>)
    }

    return lista
}