export interface ListLifeCenter {
  id: string;
  lifeCenter: string;
  Sucursal:string;
  Ubicacion: string;
}

export function getListLifeCenter():ListLifeCenter[] {
  return [
    {
      id: '1',
      lifeCenter: 'INMOBILIARIA CINEMATOGRAFÍA DEL NORTE',
      Sucursal: 'ESFERA MONTERREY',
      Ubicacion: 'Monterrey, Nuevo Léon',
    },
    {
      id: '2',
      lifeCenter: 'INMOBILIARIA CINEMATOGRAFÍA DEL NORTE',
      Sucursal: 'ESCALA CULIACAN',
      Ubicacion: 'Culiacan, Sinaloa ',
    },
    {
      id: '3',
      lifeCenter: 'INMOBILIARIA CINEMATOGRAFÍA DEL NORTE',
      Sucursal: 'ESPACIO LAS AMÉRICAS ',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '4',
      lifeCenter: 'INMOBILIARIA CITELIS',
      Sucursal: 'CORPORATIVAS',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '5',
      lifeCenter: 'INMOBILIARIA Y COMERCIAL LAS AMERICAS',
      Sucursal: 'ESCALA MORELIA',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '6',
      lifeCenter: 'PROMOTORA INMOBILIARIA Y CONSTRUCTORA DE PLAZA MORELIA',
      Sucursal: 'MORELIA ESCALA LA HUERTA,)',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '7',
      lifeCenter: 'PROMOTORA INMOBILIARIA Y CONSTRUCTORA DE PLAZA MORELIA',
      Sucursal: 'GALERÍA DEL ZAPATO',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '8',
      lifeCenter: 'PROMOTORA INMOBILIARIA Y CONSTRUCTORA DE PLAZA MORELIA',
      Sucursal: 'ESFERA QUERÉTARO',
      Ubicacion: 'Queretaro , Queretaro',
    },
    {
      id: '9',
      lifeCenter: 'IMOBILIÁRIA CINEMATOGRÁFICA OCCIDENTAL',
      Sucursal: 'ESCALA LAS ARMAS',
      Ubicacion: 'LAS ARMAS, TLANEPANTLA',
    },
    {
      id: '10',
      lifeCenter: 'IMOBILIÁRIA CINEMATOGRÁFICA OCCIDENTAL',
      Sucursal: 'ESCALA MAZATLÁN',
      Ubicacion: 'MAZATLAN, SINALOA ',
    },
    {
      id: '11',
      lifeCenter: 'IMOBILIÁRIA CINEMATOGRÁFICA OCCIDENTAL',
      Sucursal: 'ESCALA CELAYA',
      Ubicacion: 'ESCALA CELAYA CELAYA, GUANAJUATO',
    },
    {
      id: '12',
      lifeCenter: 'PROMOTORA INMOBILIARIA RESIDENCIAL MICHOACANA,    SA DE CV',
      Sucursal: 'TORRE FINANCIERA',
      Ubicacion: 'Morelia Mich.',
    },
  ];
}

