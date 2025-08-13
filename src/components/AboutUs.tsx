import { motion } from 'framer-motion';

interface AboutUsProps {
  id: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const aboutContent = [
    {
      title: 'Our Story',
      description: 'Mountain Honey was founded with a passion for pure, sustainable honey harvested from the untouched peaks of the mountains.',
    },
    {
      title: 'Our Mission',
      description: 'To bring the natural sweetness of mountain honey to the world while protecting the environment and supporting local communities.',
    },
  ];

  return (
    <section id={id} className="h-screen w-full flex flex-col items-center justify-center bg-honey-light">
      <motion.div
        className="w-11/12 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/mountain-honey-hero.jpg" // Placeholder: Replace
          alt="About Mountain Honey"
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      </motion.div>
      <div className="flex flex-col md:flex-row gap-4 w-11/12 md:w-3/4">
        {aboutContent.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-honey-brown text-xl font-bold">{item.title}</h3>
            <p className="text-honey-green">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;