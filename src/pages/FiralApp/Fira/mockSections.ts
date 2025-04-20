import { Fair, mockFairs } from './FairCard';

export interface SectionData {
  title: string;
  fairs: Fair[];
}

export const mockSections: SectionData[] = [
  {
    title: 'Obertura properes inscripcions',
    fairs: mockFairs,
  },
  {
    title: 'Fires de tamany mitjà',
    fairs: mockFairs,
  },
];
