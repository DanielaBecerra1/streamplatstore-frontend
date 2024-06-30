import React from 'react';
import useFetch from '../hooks/useFetch';
import AccountCard from '../components/AccountCard';
import { Account } from '../utils/interfaces';


const RentAccount: React.FC = () => {
  const { data: accounts, loading, error } = useFetch<Account[]>('/api/accounts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Rentar Cuenta</h1>
      {accounts && accounts.map(account => (
        <AccountCard
          key={account.platform}  
          platform={account.platform}
          username={account.username}
          password={account.password}
          available={account.available}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default RentAccount;
