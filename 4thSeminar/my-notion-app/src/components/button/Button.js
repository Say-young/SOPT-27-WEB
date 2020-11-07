import './Button.scss'

function Button({ text, textColor="#444", onClickFunc }) {
    return (
        //style은 반드시 key-value를 갖고 있는 object의 형태로 넣어야 함
        <div className="button" style={{color: textColor}}
            onClick={onClickFunc}
        >{ text }</div>
    );
}

export default Button;