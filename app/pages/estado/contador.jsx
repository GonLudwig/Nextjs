import { useState } from "react"

export default function contador() {
    const [contador, setContador] = useState(0)

    function somar () {
        setContador((cont) => cont + 1)
    }

    function subtrair () {
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {contador}</div>
            <button onClick={subtrair}>-</button>
            <button onClick={somar}>+</button>
        </div>
    )
}