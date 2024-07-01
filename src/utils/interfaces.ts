export interface Platform {
  id: number;
  name: string;
  available: boolean;
  price: number;
  imageSrc: string;
}

export interface Account {
  id: number;
  platformName: string;
  duration: number;
}



export interface PlatformCardProps {
    id: number;
    name: string;
    available: boolean;
    price: number;
    imageSrc: any;
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

export interface SearchBarProps {
  onSearch: (query: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SuccessModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  successMessage: string;
}

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

export interface PlatformFormModalProps {
  platform?: Platform | null;
  onSubmit: (platform: Platform) => void;
  onClose: () => void;
}