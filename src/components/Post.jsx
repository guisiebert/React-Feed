export function Post(props) {
    return (
        <div>
            <strong>
                {props.name}
            </strong>
            <p> 
                {props.post}
            </p>
        </div>
    )
}