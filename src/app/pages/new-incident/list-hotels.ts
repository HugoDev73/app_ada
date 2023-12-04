export interface ListHotels {
  id: string;
  name: string;
  location: string;
}

export function getListHotels():ListHotels[] {
  return [
    {
        id: '1',
        name:'Holiday Inn',
        location:'Morelia'
    },
    {
        id: '2',
        name:'Holiday inn express',
        location:'Morelia'
    },
    {
        id: '3',
        name:'Holiday inn express',
        location:'Guadalajara'
    }
  ];
}
