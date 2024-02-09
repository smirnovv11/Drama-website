import style from './Button.module.css'

const Button = (props) => {
    return (
        <button className={style.button} style={props.style}>
            {props.children}
        </button>
    )
}

export default Button