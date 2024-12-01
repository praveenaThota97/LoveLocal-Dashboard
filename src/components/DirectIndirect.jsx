import './dIrectIndirect.css';

function formatNumber(num) {
    if (num >= 10000000) {
      // Greater than or equal to 1 Crore (Cr)
      return (num / 10000000).toFixed(1).replace(/\.0$/, '') + 'Cr';
    } else if (num >= 100000) {
      // Greater than or equal to 1 Lakh (L)
      return (num / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
    } else if (num >= 1000) {
      // Greater than or equal to 1 Thousand (K)
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num; // Less than 1000, return as is
  }

function DirectIndirectChart({direct,indirect}){
    return(
        <div className="DI-IndiChartContainer">
            <div className="di-idHeader">
                Direct Vs Indirect
            </div>
            <div className="di-idValues">
                <div className='directinfo'>
                    <span><img src='public/images/direct.png'/></span>
                    <span className="directVal">{formatNumber(direct)}</span>
                    <span className='directText'>Direct</span>
                </div>
                <div className='indirectinfo'>
                    <span><img src='public/images/indirect.png'/></span>
                    <span className='indirectVal'>{formatNumber(indirect)}</span>
                    <span className='indirecttext'>Indirect</span>
                </div>
                
            </div>
            <div className='di-indChart'>
                <img src='public/images/DI-Ind-Chart.png'/>
            </div>
        </div>
    )
}

export default DirectIndirectChart;