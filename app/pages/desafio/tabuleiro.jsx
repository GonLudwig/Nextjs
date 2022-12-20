import Tabuleiro from "../../components/Tabuleiro"

export default () => {
    return (
        <div style={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>Tabuleiro</h1>
            <Tabuleiro/>
        </div>
    )
}