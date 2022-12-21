import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item 01" />
                <Item conteudo="Item 02" />
                <Item conteudo="Item 03" />
                <Item conteudo="Item 04" />
                <Item conteudo="Item 05" />
            </Lista>
        </div>
    )
}