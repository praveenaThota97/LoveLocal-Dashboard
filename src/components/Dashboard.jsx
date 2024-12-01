import {useState,useEffect} from 'react';

import Top from "./Top";
import Header from'./Header';
import SideBar from './SideBar';
import Card from './card.jsx';
import DirectIndirectChart from './DirectIndirect.jsx';
import AvgOverLoad from './AVGOverLoadValue.jsx';

function Dashboard(){
    const [salesData,setSalesData]= useState(null);
    const [revenueData,setrevenueData]= useState(null);
    const [orderValueData,setOrderValueData]= useState(null);

    const fetchData = async()=>{
        try{

            const salesResponse = await fetch('http://34.93.245.38/sale');
            const salesData = await salesResponse.json();
            setSalesData(salesData);
            console.log(salesData);
            console.log("salesData");

            const revenueResponse = await fetch('http://34.93.245.38/revenue');
            const revenueData = await revenueResponse.json();
            setrevenueData(revenueData);
            console.log(revenueData);
            console.log("revenueData");

            const orderValueResponse = await fetch('http://34.93.245.38/order-value');
            const orderValueData = await orderValueResponse.json();
            setOrderValueData(orderValueData);
            console.log(orderValueData);
            console.log("orderValuData");

        }catch(error){
            console.log('Error Occured while fetching data');
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
                <Header/>
                <Top/>
                <div className='card_chart'>
                    <div className='cards'>
                        {
                            salesData && revenueData && orderValueData ?(
                                <>
                                    <Card 
                                        title="Retail"
                                        value={salesData.retailerInfo.totalSales}
                                        percentage={salesData.retailerInfo.percentageDifference}
                                        logo='public/images/retailerLogo.png'
                                        menu='public/images/card_Menu.png'
                                        chartImage='public/images/retailerChart.png'
                                    />
                                    <Card 
                                        title="Customer"
                                        value={salesData.customerInfo.totalSales}
                                        percentage={salesData.customerInfo.percentageDifference}
                                        logo='public/images/customerLogo.png'
                                        menu='public/images/card_Menu.png'
                                        chartImage='public/images/customerChart.png'
                                    />
                                    <Card 
                                        title="Key Account"
                                        value={salesData.keyAccountInfo.totalSales}
                                        percentage={salesData.keyAccountInfo.percentageDifference}
                                        logo='public/images/keyProjectLogo.png'
                                        menu='public/images/card_Menu.png'
                                        chartImage='public/images/keyProjectChart.png'
                                    />
                                </>
                            ):(
                                <p>Loading...</p>
                            )
                        }
                    </div>
                    <DirectIndirectChart 
                        direct={revenueData && revenueData.directIndirectInfo.totalSalesDirect}
                        indirect ={revenueData && revenueData.directIndirectInfo.totalSalesIndirect}
                    />
                    <AvgOverLoad
                        overLoadValue={orderValueData && orderValueData.averageOrderValueInfo.total}
                        percentage={orderValueData && orderValueData.averageOrderValueInfo.percentageDifference}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard