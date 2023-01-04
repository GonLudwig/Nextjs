import Filho from "./FIlho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Glauco" familia={props.familia} />
            <Filho nome="Rodrigo" familia={props.familia} />
            <Filho nome="Fernando" familia={props.familia} />
            <Filho {...props} nome="Andrey" />
        </div>
    )
}