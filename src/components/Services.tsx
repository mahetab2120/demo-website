import { motion } from 'framer-motion';

interface ServiceProps {
  id: string;
}

const Services: React.FC<ServiceProps> = ({ id }) => {
  const services1 = [
    { title: 'Pure Mountain Honey', description: 'Sustainably harvested from pristine mountain regions.' },
    { title: 'Eco-Friendly Practices', description: 'Committed to preserving nature with every jar.' },
  ];

  const services2 = [
    { title: 'Handcrafted Quality', description: 'Each batch is crafted with care and tradition.' },
    { title: 'Community Support', description: 'Supporting local beekeepers and their families.' },
  ];

  return (
    <section id={id} className="h-[200vh] w-full flex flex-col snap-y snap-mandatory">
      {/* First Service Section */}
      <div className="h-screen w-full flex flex-col md:flex-row snap-start">
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/mountain-honey-service1.jpg')" }} // Placeholder: Replace
        ></div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-honey-light p-6">
          {services1.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 m-4 w-full max-w-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-honey-brown text-xl font-bold">{service.title}</h3>
              <p className="text-honey-green">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Second Service Section */}
      <div className="h-screen w-full flex flex-col md:flex-row snap-start">
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center order-1 md:order-2"
          style={{ backgroundImage: "url('/mountain-honey-service2.jpg')" }} // Placeholder: Replace
        ></div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-honey-light p-6 order-2 md:order-1">
          {services2.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 m-4 w-full max-w-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-honey-brown text-xl font-bold">{service.title}</h3>
              <p className="text-honey-green">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;