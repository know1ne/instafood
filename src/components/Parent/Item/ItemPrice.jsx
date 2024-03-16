
import PropTypes from 'prop-types';

const ItemPrice = ({ price }) => {
  return (
    <div>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ItemPrice;
