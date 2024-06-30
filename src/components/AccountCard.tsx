import React from "react";
import { AccountCardProps } from "../utils/interfaces";

const AccountCard: React.FC<AccountCardProps> = ({
  platform,
  username,
  password,
  available,
  onClick,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{platform}</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Available: {available ? "Yes" : "No"}</p>
      <button onClick={onClick} className="mt-2 text-blue-500 hover:underline">
        Rent Account
      </button>
    </div>
  );
};

export default AccountCard;
