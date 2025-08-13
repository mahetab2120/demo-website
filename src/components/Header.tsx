import { FaBars } from 'react-icons/fa';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-honey-green bg-opacity-80 backdrop-blur-sm">
      <div className="flex justify-center items-center py-4">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="text-honey-yellow text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;