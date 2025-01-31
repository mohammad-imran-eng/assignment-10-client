import Banner from "../../components/Banner";
import { Slide } from "react-awesome-reveal";
import { FaLightbulb, FaPalette } from 'react-icons/fa';

const HomeLayout = () => {
    return (
        <div>
        <Banner />
        {/* slider  */}

                <div className="h-[400px] flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="text-center space-y-8">
                <Slide direction="left" cascade triggerOnce>
                <div className="text-white bg-gray-600 feature flex items-center justify-center space-x-4  bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6">
                    <FaLightbulb className="text-4xl text-yellow-400" />
                    <span className="text-2xl font-semibold ">💡 Gorgeous</span>
                </div>
                <div className="text-white feature flex items-center justify-center space-x-4 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6">
                    <FaPalette className="text-4xl text-pink-400" />
                    <span className="text-2xl font-semibold ">🎨 Customization</span>
                </div>
                </Slide>
            </div>
            </div>
        </div>
    );
};

export default HomeLayout;
