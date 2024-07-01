export const generateRandomEmail = () => `user${Math.floor(Math.random() * 10000)}@example.com`;
export const generateRandomPassword = () => Math.random().toString(36).slice(-8);