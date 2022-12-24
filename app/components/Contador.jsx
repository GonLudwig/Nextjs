export default function Contador(props) {
    const style = {
        display: "flex",
        height: "100px",
        width: "100px",
        borderRadius: "50px",
        backgroundColor: "white",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem"
    }
    
    return (
        <div style={style}>
            {props.numero}
        </div>
    )
}