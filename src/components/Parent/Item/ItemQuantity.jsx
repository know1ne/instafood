
import PropTypes from 'prop-types';

const ItemQuantity = ({ quantity }) => {
  return (
    <div>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

ItemQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default ItemQuantity;
