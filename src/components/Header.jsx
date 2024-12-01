import './header.css'
function Header(){
    return(
        <>
            <div className="headerContainer">
                <nav className='navigationIcons'>
                    <li className='search'><img src="./images/search.png" alt="search"/></li>
                    <li className='notifications'><img src="./images/notifications.png" alt="notifications"/>
                    <span><img src='./images/Oval.png' alt='alert'></img></span> </li>
                    <li className='info'><img src="./images/info.png" alt="information"/> </li>
                </nav>
                <img src="./images/Rectangle.png" alt="rectangleBar"/>
                <div className='profile'>
                    <p>Praveena<span><img src="./images/profileIcon.png" alt="profileIcon"></img></span></p>
                </div>
             </div>
             {/* Div for header separator */}
             <div className="headerDivider"></div>
        </>
        
    )
}

export default Header;