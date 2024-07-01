import React from "react";
import { PlatformDetailsProps } from "../utils/interfaces";
import imageMap from "../utils/imageMap";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const PlatformDetails: React.FC<PlatformDetailsProps> = ({ platform }) => {
  const navigate = useNavigate();

  const redirectRent = () => {
    navigate('/rent-account', { state: { platform } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-blue-50 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex items-center">
          <div className="md:w-1/3 p-6">
            <img
              src={imageMap[platform.name] || "src/assets/default.jpg"}
              alt={platform.name}
              className="h-96 w-full object-contain rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-3xl font-semibold mb-4">{platform.name}</h2>
            <p className="text-gray-700 mb-6">{platform.description}</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-900">Available: {platform.available ? "Yes" : "No"}</p>
                <p className="text-gray-900">Price: ${platform.price}</p>
              </div>
              <Button onClick={redirectRent}>Adquirir Plataforma</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDetails;