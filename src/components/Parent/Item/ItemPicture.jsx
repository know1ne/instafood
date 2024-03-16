
import PropTypes from 'prop-types';

const ItemPicture = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Item" />
    </div>
  );
};

ItemPicture.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ItemPicture;
