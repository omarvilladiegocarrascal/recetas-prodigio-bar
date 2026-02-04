import React from 'react';
import { Recipe } from './types';

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Mojito Clásico',
    description: 'Refrescante, cítrico y perfecto para el calor. Directo desde La Habana.',
    image: 'https://imag.bonviveur.com/mojito-cubano.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Mojito',
    ingredients: [
      '60 ml o un shot de aguardiente',
      '1 lima',
      '1 shot de azucar',
      'Hojas de hierbabuena',
      'Hielo',
      'Agua con gas'
    ],
    instructions: [
      'Cortar los limones en trozos y agregarlos al vaso.',
      'Añadir las hojas de hierbabuena y presionar ligeramente.',
      'Agregar el ron y hielo al tope pero que quede espacio.',
      'Completar con soda y mezclar suavemente.'
    ],
    servings: 1
  },
  {
    id: '2',
    title: 'Margarita Clásica',
    description: 'Clásico cóctel mexicano con tequila, triple seco y lima. Cítrico, con sal en el borde y perfecto para cualquier ocasión.',
    image: 'https://imag.bonviveur.com/margarita.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Margaritas',
    ingredients: [
      '60 ml o un shot de tequila',
      '1 shot o 60 ml de limón',
      '1 shot de azucar',
      'Hielo',
      ''
    ],
    instructions: [
      'Agregar 1/2 shot de tequila, 1/2 shot de triple sec y 1 shot de limón a la licuadora.',
      'Licuar con hielo hasta obtener frappé',
      'Michelar el vaso de margarita por la mitad y decorar con tajin al lado',
      'completar con otro 1/2 shot de tequila en el vaso',
      'servir en el vaso de margarita y decorar con limon en rodajas'
    ],
    servings: 1
  },
  {
    id: '3',
    title: 'Margarita Maracuyá',
    description: 'Clásico cóctel mexicano con tequila, triple seco y lima. Cítrico, con sal en el borde y perfecto para cualquier ocasión.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/02/07/14/margarita-de-maracuya.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Margaritas',
    ingredients: [
      '60 ml o un shot de tequila',
      '30 ml de limón',
      '1 shot de azucar',
      '30 ml o 1/2 shot de triple sec',
      'Hielo',
    ],
    instructions: [
      'Cortar los limones en trozos y agregarlos al vaso.',
    ],
    servings: 1
  },
  {
    id: '4',
    title: 'Jugo de Corozo',
    description: 'Refrescante jugo tropical hecho con corozo, una fruta típica del Caribe. Dulce, ligeramente ácido y perfecto para hidratarse en días calurosos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hurricane_at_Pat_O%27Brien%27s.JPG/960px-Hurricane_at_Pat_O%27Brien%27s.JPG',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '180 ml o u 3 shots de jugo de corozo',
      '1 shot de azucar',
      'Hielo',
      'uva isabella de decoración'
     
    ],
    instructions: [
      'Agregar los tres shots en una copa huracan.',
      'Agregar el azúcar y mezclar suavemente.',
      'Completar con hielo al tope.'
    ],
    servings: 1
  },
  {
    id: '5',
    title: 'Jugo de Maracuyá',
    description: 'Refrescante jugo tropical hecho con maracuyá, una fruta tropical típica del Caribe. Dulce, ligeramente ácido y perfecto para hidratarse en días calurosos.',
    image: 'https://dmglassware.com/wp-content/uploads/2025/04/What-Is-a-Hurricane-Cocktail-Glass.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '180 ml o u 3 shots de jugo de maracuyá',
      '1 shot de azucar',
      'Hielo al tope',
      'uva isabella de decoración'
     
    ],
    instructions: [
      'Cortar los limones en trozos y agregarlos al vaso.',
    ],
    servings: 1
  }
 
  
 
];

export const Icons = {
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ChefHat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
};
