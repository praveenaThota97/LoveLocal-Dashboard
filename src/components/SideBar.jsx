
function Sidebar(){
    return(
        <div className="sidebar">
            <img className="logo" src="./images/Bitmap.png" alt="logo"/>
            <div className="menu">
                <p>PAGES</p>
                <div className="dashboardBlock">
                    <img src="./images/dashboardLogo.png" alt="dashboardLogo"/>
                    <span className="dashboard">Dashboard</span>
                </div>
                <div className="customerBlock">
                    <img src="./images/customersLogo.png" alt="customersLogo"/>
                    <span className="customers">Customers</span>
                </div>  
            </div>
        </div>
    )
}

export default Sidebar;