import { useEffect, useState } from "react";
import Contador from "../../components/Contador";
import { mega } from "../../functions/mega";

export default function megaSenha() {
    const [quantidade, setQuantidade] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => setNumeros(mega(quantidade)), [])
    
    function gerarNumero() {
        return numeros.map(
            (numero, i) => <Contador key={i} numero={numero}/>
        )
    }

    return (
        <div>
            <h1>MegaSena</h1>
            <div style={{ display: "flex"}}>{gerarNumero()}</div>
            <input 
                type="number" 
                min={6}
                max={20}
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)}
            />
            <button onClick={() => setNumeros(mega(quantidade))}>Sortear</button>
        </div>
    )
}