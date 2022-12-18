export default function Estilo(props) {
    const estilo = {
        backgroundColor: props.numero >= 3 ? "red" : "green",
        color: props.color,
        textAlign: props.direita ? "right" : "left"
    }
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 3 ? "red" : "green",
                color: props.color,
                textAlign: props.direita ? "right" : "left"
            }}>
                Texto
            </h1>
        </div>
    )
}