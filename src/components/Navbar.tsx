import { motion } from 'framer-motion';
import { NavItem } from '../types';
import logo from '/logo.jpg'; // Placeholder: Replace with actual logo path

interface NavbarProps {
  navItems: NavItem[];
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-honey-green bg-opacity-95 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        className="w-[90vw] h-[90vh] bg-honey-light rounded-lg flex flex-col items-center p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={logo} alt="Mountain Honey Logo" className="h-16 mb-8" />
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-honey-brown text-xl font-semibold hover:text-honey-yellow transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;