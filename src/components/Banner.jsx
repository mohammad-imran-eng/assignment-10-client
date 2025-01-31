import { Fade } from 'react-awesome-reveal';
import { FaRunning, FaTshirt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="h-[450px] bg-gradient-to-r from-gray-600 to-gray-800 py-12 px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text and CTA */}
        <div className="flex-1 space-y-6">
          <Fade duration={1500}>
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to EquiSports!
          </h1>
          <h1 className="text-4xl md:text-4xl font-bold">
            Gear Up for Victory!
          </h1>
          <Fade delay={500} cascade damping={0.3}>
          <p className="text-lg md:text-xl">
            Explore our premium sports equipment and apparel. Elevate your game
            with the best gear in the market.
          </p>
          </Fade>
          </Fade>
          
          <Link to='/sportsEquipment' className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold space-x-2 hover:bg-gray-200 transition duration-300">
            <FaShoppingCart className="inline-block" />
            <span>Shop Now</span>
          </Link>
        </div>

        {/* Right Section - Icons and Visuals */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="flex space-x-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg flex items-center justify-center">
              <FaRunning className="text-4xl" />
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg flex items-center justify-center">
              <FaTshirt className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;