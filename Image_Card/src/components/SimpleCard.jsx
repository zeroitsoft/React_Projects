import Display from './Display';
import Title from './Title';
import Description from './Description';

function SimpleCard()
{
    return (
        <div className="flex-container">
            <div className="flex-item-left">
                <Display url="img/user_woman.svg"/>
                
            </div>
            <div className="flex-item-right">
                <Title title="Employee of the Month"/>
                <Description detail="This is an outstanding employee of the month.
                                    Kindly surprise her with something when you see her."/>
            </div>
        </div>
    );
}

export default SimpleCard;