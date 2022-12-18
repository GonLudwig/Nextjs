export default function Titulo(props) {

    return (
        <>
            <h1>{props.principal ?? "Titulo"}</h1>
            <h2>{props.secundario ?? "Subtitulo" }</h2>
        </>
    )
}