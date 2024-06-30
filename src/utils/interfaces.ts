export interface Platform {
  id: number;
  name: string;
  available: boolean;
  price: number;
  description: string;
}

export interface Account {
  platform: string;
  username: string;
  password: string;
  available: boolean;
}

export interface AccountCardProps {
  platform: string;
  username: string;
  password: string;
  available: boolean;
  onClick: () => void;
}

export interface PlatformCardProps {
    name: string;
    description: string;
    available: boolean;
    price: number;
    onClick: () => void;
}

export interface PlatformDetailsProps {
    platform: {
      name: string;
      description: string;
      available: boolean;
      price: number;
    };
  }

export interface Account {
  platform: string;
  username: string;
  password: string;
  available: boolean;
}
