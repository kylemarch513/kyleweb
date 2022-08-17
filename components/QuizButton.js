export default function QuizButton (props) {


    return (
        <div>
            <button value={props.value} onClick={props.func}>{props.text}</button>
        </div>
    )

}