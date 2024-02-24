import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Example icons, you can choose others too

const CustomButton = ({ onClick, direction }) => {
    return (
      <button onClick={onClick} className={`custom-arrow-button ${direction}`}>
        {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    );
  };

  export default CustomButton
  
  