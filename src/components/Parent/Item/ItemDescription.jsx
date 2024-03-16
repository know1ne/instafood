
import PropTypes from 'prop-types';

const ItemDescription = ({ description }) => {
  return (
    <div>
      <p>Description: {description}</p>
    </div>
  );
};

ItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ItemDescription;
