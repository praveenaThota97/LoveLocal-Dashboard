import './top.css';
function Top(){
    return(
        <div className="topContainer">
            <div className='banner'>
                <div className='greetings'>
                    <p className='greetingsUser'>
                        Good afternoon, <span className='userName'>Praveena</span>
                        <span role="img" className='handwave' aria-label="wave">👋</span>
                    </p>
                    <p className='updates'>Here is what's happening today</p>
                </div>   
            </div>
            <div className='secondBanner'>
                <div className='team'>
                    <img src='./images/Team.png' alt='team'/>
                </div>
                <div className='actions'>
                    <div className='sortIcon'>
                        <img src='./images/sortIcon.png' alt='sortIcon'/>
                    </div>
                    <div className='calender'>
                        <img src='./images/calender.png' alt='sortIcon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top;