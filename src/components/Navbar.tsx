import { motion } from 'framer-motion';
import { NavItem } from '../types';
//import logo from '/logo.jpg'; // Placeholder: Replace with actual logo path

interface NavbarProps {
  navItems: NavItem[];
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-honey-green to-honey-green-dark bg-opacity-95 z-50 flex justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-4xl h-[80vh] sm:h-[70vh] bg-honey-light rounded-2xl flex flex-col items-center p-6 sm:p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          {/* Uncomment if using logo */}
          {/* <img src={logo} alt="Mountain Honey Logo" className="h-12 sm:h-16 md:h-20 mb-6 rounded-full border-2 border-honey-yellow" /> */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_3px_3px_rgba(0,0,0,0.2)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ALVIO
          </h1>
        </motion.div>
        <nav className="flex flex-col items-center space-y-4 mt-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-honey-brown text-lg sm:text-xl md:text-2xl font-semibold hover:text-honey-yellow transition-colors duration-300 group"
              onClick={onClose}
              variants={itemVariants}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-honey-yellow transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
        <motion.button
          className="mt-8 px-6 py-2 bg-honey-yellow text-honey-green font-semibold rounded-full hover:bg-amber-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-honey-yellow"
          onClick={onClose}
          aria-label="Close navigation menu"
          variants={itemVariants}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;