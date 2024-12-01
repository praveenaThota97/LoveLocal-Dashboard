
import './AvgOrder.css';

function AvgOverLoad({overLoadValue,percentage}){
    return(
        <div className="overLoadContainer">
            <div className="OverloadHeader">
                AVG Order Value
            </div>
            <div className="avgorderValues">
                <div className='avgintegerVal'>
                   <span className="overLoadValue">{overLoadValue}</span>
                   <span
                        className={ `percentage ${percentage>=0 ? 'positive' : 'negative'}`}
                    >   
                        {percentage>0? '+':''}
                        {percentage}%
                    </span>
                </div>
                <div className='currentPreviousInfo'>
                    <div className='currentInfo'>
                        <span><img src='public/images/direct.png'/></span>
                        <span className='currentText'>Current</span>
                    </div>
                    <div className='previousInfo'>
                        <span><img src='public/images/previous.png'/></span>
                        <span className='previousText'>Previous</span>
                    </div>
                </div>   
            </div>
            <div className='avgOrderChart'>
                <img src='public/images/avgOrderChart.png'/>
            </div>
        </div>
    )
}

export default  AvgOverLoad;