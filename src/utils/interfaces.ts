export interface Platform {
  id: number;
  name: string;
  available: boolean;
  price: number;
  description: string;
}

export interface Account {
  id: number;
  platformName: string;
  duration: number;
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


export interface ErrorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  errorMessage: string;
}
