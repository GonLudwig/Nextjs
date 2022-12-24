import { useState } from "react"

export default function formulario() {
    const [valor, useValor] = useState("Inicial")

    function alterarValor() {
        useValor(valor + "!")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <h1>Formulario</h1>
            <span>{valor}</span>
            <input type="text" value={valor} onChange={(e) => useValor(e.target.value)}/>
            <button onClick={alterarValor}>Alterar</button>
        </div>
    )
}