import PropTypes from 'prop-types';

SquareButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function SquareButton({
  label,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      border 
      border-gray-500 
      px-2 
      rounded-lg 
      cursor-pointer
      "
    >
      {label}
    </button>
  )
}
