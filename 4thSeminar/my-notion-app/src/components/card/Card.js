import './Card.scss';
import {DeleteOutlined} from '@ant-design/icons';

function Card({ route, memberData, onRemoveCard }) {
    return (
        <div className="card" onClick={() => route.history.push(`${route.match.path}/${memberData.id}`)} draggable >
            <div className="remove-button" onClick={onRemoveCard}>
                <DeleteOutlined/>
            </div>
            <div className="image-area">
                { memberData.profileUrl === '' ? '' : <img src={memberData.profileUrl} /> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default Card;