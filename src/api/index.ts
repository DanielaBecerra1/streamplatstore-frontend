import { Account } from "../utils/interfaces";

const API_BASE_URL_OPERADOR = 'http://localhost:8083';
const API_BASE_URL_BUSCADOR = 'http://localhost:8080';

export const registerPurchase = async (data: any) => {
  const response = await fetch(`${API_BASE_URL_OPERADOR}/registerPurchase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const rentAccount = async (data: Account) => {
  const response = await fetch(`${API_BASE_URL_OPERADOR}/rentAccount`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const findAllPlatforms = async () => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/findAllPlatforms`);
  return response.json();
};

export const findByid = async (id: number) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/findByid/${id}`);
  return response.json();
};

export const createPlatform = async (data: any) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/createPlatform`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updatePlatform = async (id: number, data: any) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/updatePlatform/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const findByAvailable = async (available: boolean) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/findByAvailable/${available}`);
  return response.json();
};

export const findByName = async (name: string) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/findByNameIgnoreCase/${name}`);
  return response.json();
};

export const deletePlatform = async (id: number) => {
  const response = await fetch(`${API_BASE_URL_BUSCADOR}/deletePlatform/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
