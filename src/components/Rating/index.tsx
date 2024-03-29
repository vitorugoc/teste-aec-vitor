import { v4 as uuidv4 } from 'uuid';

interface RatingProps {
    value: number;
    text?: string;
    color: string;
}

const Rating: React.FC<RatingProps> = ({ value, text, color }) => {
    return (
        <div className="rating" data-testid="rating">
            {[1, 2, 3, 4, 5].map((rate) => (
                <span key={uuidv4()}>
                    <i
                        style={{ color }}
                        className={
                            value + 1 === rate + 0.5
                                ? 'fas fa-star-half-alt'
                                : value >= rate
                                    ? 'fas fa-star'
                                    : 'far fa-star'
                        }
                        data-testid="star"
                    >
                    </i>
                </span>
            ))}
            <span>{text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: "#FFA41C",
}

export default Rating;