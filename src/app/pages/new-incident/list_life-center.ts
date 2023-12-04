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
      lifeCenter: 'INMOBILIARIA',
      Sucursal: 'ESFERA MONTERREY',
      Ubicacion: 'Monterrey, Nuevo Léon',
    },
    {
      id: '2',
      lifeCenter: 'CINEMATOGRAFIA',
      Sucursal: 'ESCALA CULIACAN',
      Ubicacion: 'Culiacan, Sinaloa ',
    },
    {
      id: '3',
      lifeCenter: 'DEL NORTE',
      Sucursal: 'ESPACIO LAS AMERICAS ',
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
      lifeCenter: 'PROMOTORA INMOBILIARI',
      Sucursal: 'MORELIAESCALA LA HUERTA,)',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '7',
      lifeCenter: 'Y CONSTRUCTORA',
      Sucursal: 'GALERIA DEL ZAPATO',
      Ubicacion: 'Morelia Mich.',
    },
    {
      id: '8',
      lifeCenter: 'DE PLAZA MORELIA',
      Sucursal: 'ESFERA QUERETARO',
      Ubicacion: 'Queretaro , Queretaro',
    },
    {
      id: '9',
      lifeCenter: 'IMOBILIARIA',
      Sucursal: 'ESCALA LAS ARMAS',
      Ubicacion: 'LAS ARMAS, TLANEPANTLA',
    },
    {
      id: '10',
      lifeCenter: 'CINEMATOGRAFICA',
      Sucursal: 'ESACALA MAZATLAN',
      Ubicacion: 'MAZATLAN, SINALOA ',
    },
    {
      id: '11',
      lifeCenter: 'OCCIDENTAL',
      Sucursal: 'ESCALA CELAYA',
      Ubicacion: 'ESCALA CELAYA CELAYA, GUANAJUATO',
    },
    {
      id: '12',
      lifeCenter: 'PROMOTORA INMOBILIARIA RESIDENCIAL MICHOACANA,    SA DE CV',
      Sucursal: 'TORRE      FINANCIERA',
      Ubicacion: 'Morelia Mich.',
    },
  ];
}
