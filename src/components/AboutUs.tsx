import { motion } from 'framer-motion';

interface AboutUsProps {
  id: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const aboutContent = [
    {
      title: 'Our Story',
      description:
        'Mountain Honey was founded with a passion for pure, sustainable honey harvested from the untouched peaks of the mountains.',
    },
    {
      title: 'Our Mission',
      description:
        'To bring the natural sweetness of mountain honey to the world while protecting the environment and supporting local communities.',
    },
  ];

  return (
    <section
      id={id}
      className="
        min-h-[calc(100vh-64px)]   /* screen minus header */
        w-full 
        flex flex-col items-center 
        bg-honey-light 
        pt-20 pb-12               /* push below header + bottom spacing */
      "
    >
      {/* Image Section */}
      <motion.div
        className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="aspect-[18/9] w-full rounded-lg overflow-hidden mb-8">
          <img
            src="/mountain-honey-hero.jpg"
            alt="About Mountain Honey"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 w-11/12 sm:w-3/4 lg:w-2/3 xl:w-3/4 max-w-6xl">
        {aboutContent.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-honey-brown text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-honey-green text-sm sm:text-base lg:text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
