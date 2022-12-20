import styles from "./tabuleiro.module.css"

export default () => {
    const tabuleiro = []

    for (let index = 0; index <= 8; index++) {
        const tabuleiroInterno = []
        for (let i = 0; i < 8; i++) {
            const color1 = index % 2 ? 'black' : 'white'
            const color2 = index % 2 ? 'white' : 'black'
            tabuleiroInterno.push(
                <div
                    style={{
                        backgroundColor: i % 2 ? color1 : color2
                    }} 
                    className={styles.interno}
                ></div>
            )
        }
        tabuleiro.push(
            <div className={styles.externo}>{tabuleiroInterno}</div>
        )    
    }

    return tabuleiro
}