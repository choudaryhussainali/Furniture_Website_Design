export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum ConciergeState {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  THINKING = 'THINKING',
  SPEAKING = 'SPEAKING',
  DISCONNECTED = 'DISCONNECTED'
}

export interface NavItem {
  label: string;
  path: string;
}