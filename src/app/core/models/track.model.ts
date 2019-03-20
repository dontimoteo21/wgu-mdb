export interface Track {
  title: string;
  id: string;
  items: Item[];
}

export interface Item {
  title: string;
  description: string;
  id: string;
}
