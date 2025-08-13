import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FooterProps {
  id: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <section id={id} className="h-screen w-full flex flex-col items-center justify-center bg-honey-green text-honey-light">
      <motion.div
        className="w-11/12 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-honey-yellow mb-8 text-center">Contact Us</h2>
        <form
          action="https://formspree.io/f/your-form-id" // Replace with actual Formspree ID
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg text-honey-green"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg text-honey-green"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded-lg text-honey-green h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-honey-yellow text-honey-green p-3 rounded-lg hover:bg-honey-brown transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-honey-yellow text-2xl hover:text-honey-brown"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-honey-yellow text-2xl hover:text-honey-brown"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-honey-yellow text-2xl hover:text-honey-brown"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;