export default function Buttons(props) {
    let btns = props.elements.map(e => {
        return <button id={e} key={e} onClick={props.handler}>{e}</button>
    })

    return <div> {btns} </div>
}
