import If from "../../components/If";

export default function condicional2() {
    const numero = 4
    return (
        <div>
            <If teste={numero % 2 == 0}>
                O numero {numero} e par
            </If>
            <If teste={numero % 2 == 1}>
                O numero {numero} e impar
            </If>
        </div>
    )
}