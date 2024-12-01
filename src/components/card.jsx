import './card.css';

function Card({ title, value, percentage, chartImage, logo, menu }) {
  return (
    <div className="card-container">
      <div className='card_header'>
        <img className='card_logo' src={logo} alt='card header'></img>
        <img className='card_menu' src={menu} alt='card header'></img>
      </div>
      <h3 className='card_title'>{title}</h3>
      <div className='card_body'>
        <p className='sales_label'>SALES</p>
        <div className='salesInfo'>
            <p className='sales_value'>{value}</p>
            <span
                className={ `percentage ${percentage>=0 ? 'positive' : 'negative'}`}
            >   
                {percentage>0? '+':''}
                {percentage}%
            </span>
        </div>
        
      </div>
      <div className='card_footer'>
            <img src={chartImage} alt="salesChart" />
      </div>

    </div>
  );
}

export default Card;
