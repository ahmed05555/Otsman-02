
export enum ViewType {
  BIOGRAPHY = 'BIOGRAPHY',
  WORKS = 'WORKS',
  AWARDS = 'AWARDS',
  CHAT = 'CHAT'
}

export interface Artwork {
  id: string;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  institution: string;
}
