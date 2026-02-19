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
      '30 ml de triple sec'
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
      '1 shot de jugo de maracuyá',
      'Hielo',
    ],
    instructions: [
      'Agregar 1/2 shot de tequila, 1/2 shot de triple sec y 1/2 shot de limón y un shot de jugo de maracuyá a la licuadora.',
      'Licuar con hielo hasta obtener frappé',
      'Michelar el vaso de margarita por la mitad y decorar con tajin al lado',
      'completar con otro 1/2 shot de tequila en el vaso',
      'servir en el vaso de margarita y decorar con limon en rodajas'
    ],
    servings: 1
  },
  {
    id: '4',
    title: 'Jugo de Corozo',
    description: 'Refrescante jugo tropical hecho con corozo, una fruta típica del Caribe. Dulce, ligeramente ácido y perfecto para hidratarse en días calurosos.',
    image: 'https://res.cloudinary.com/dbzbkk9l6/image/upload/v1771474238/Gemini_Generated_Image_esho5cesho5cesho_wtfzpb.png',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '180 ml o 3 shots de jugo de corozo',
      '1 shot de azucar',
      '1 shot de agua filtrada',
      'Hielo',
      'uva isabella de decoración'
     
    ],
    instructions: [
      'Agregar los tres shots de jugo de corozo en una copa huracan.',
      'Agregar 1 shot de agua filtrada',
      'Agregar el azúcar y mezclar suavemente con la cuchara larga de bar.',
      'Completar con hielo al tope.',
      'Decorar con tres uvas isabellas en un palillo'
    ],
    servings: 1
  },
  {
    id: '5',
    title: 'Jugo de Maracuyá',
    description: 'Refrescante jugo tropical hecho con maracuyá, una fruta tropical típica del Caribe. Dulce, ligeramente ácido y perfecto para hidratarse en días calurosos.',
    image: 'https://res.cloudinary.com/dbzbkk9l6/image/upload/v1771473925/Gemini_Generated_Image_caxkazcaxkazcaxk_1_y7hrgi.png',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '180 ml o u 3 shots de jugo de maracuyá',
      '1 shot de azucar',
      '1 shot de agua filtrada',
      'Hielo al tope',
      'uva isabella de decoración'
     
    ],
    instructions: [
      'Agregar los tres shots de jugo de maracuyá en una copa huracan.',
      'Agregar 1 shot de agua filtrada',
      'Agregar el azúcar y mezclar suavemente con la cuchara larga de bar.',
      'Completar con hielo al tope.',
      'Decorar con una rodaja de limón'
    ],
    servings: 1
  },
  {
    id: '6',
    title: 'Jugo de Mandarina',
    description: 'Refrescante jugo tropical hecho con mandarina, una fruta tropical típica del Caribe. Dulce, ligeramente ácido y perfecto para hidratarse en días calurosos.',
    image: 'https://res.cloudinary.com/dbzbkk9l6/image/upload/v1771473198/Gemini_Generated_Image_m71lalm71lalm71l_xkpyig.png',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '1 pulpa de mandarina',
      '1 shot de azucar',
      'hielo para frappear',
      'uva isabella de decoración'
     
    ],
    instructions: [
      'Cortar la pulpa de mandarina por la mitad',
      'Agregar la pulpa de mandarina en la licuadora.',
      'Agregar 1 shot de azucar en la licuadora.',
      'Agregar medio shot de limón para potenciar el sabor',
      'Agregar un shot de agua filtrada en la licuadora',
      'Licuar la pulpa antes de agregar el hielo para obtener una mezcla suave.',
      'Agregar muy poco hielo para frappear y si hace falta agregar un poco mas de agua',
      'servir en una copa huracan y decorar con una rodaja de limón'
    ],
    servings: 1
  },
  {
    id: '7',
    title: 'Jugo de Fresa',
    description: 'Refrescante jugo tropical hecho con fresa, una fruta tropical típica del Caribe.',
    image: 'https://res.cloudinary.com/dbzbkk9l6/image/upload/v1771473375/Gemini_Generated_Image_f8xty2f8xty2f8xt_1_gi77j4.png',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '1 pulpa de fresa, una bolsa de fresas congeladas si no hay pulpa',
      '1 shot de azucar',
      '1 shot de agua filtrada',
      'hielo para frappear',
     
    ],
    instructions: [
      'Cortar la pulpa de fresa por la mitad',
      'Agregar la pulpa de fresa en la licuadora.',
      'Agregar 1 shot de azucar en la licuadora.',
      'Agregar un shot de agua filtrada en la licuadora',
      'Licuar la pulpa antes de agregar el hielo para obtener una mezcla suave.',
      'Agregar muy poco hielo para frappear y si hace falta agregar un poco mas de agua',
      'servir en una copa huracan y decorar con una rodaja de fresa partida'
    ],
    servings: 1
  },
  {
    id: '8',
    title: 'Jugo de Mora',
    description: 'Refrescante jugo tropical hecho con mora, una fruta tropical típica del Caribe.',
    image: 'https://res.cloudinary.com/dbzbkk9l6/image/upload/v1771473736/Gemini_Generated_Image_mg90cwmg90cwmg90_hmlt1x.png',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Jugos',
    ingredients: [
      '1 pulpa de mora, una bolsa de moras congeladas si no hay pulpa', 
      '1 shot de azucar',
      'hielo para frappear',
     
    ],
    instructions: [
      'Agregar la pulpa de mora en la licuadora.',
      'Agregar 1 shot de azucar a la licuadora.',
      'Completar con poco hielo para frappear.',
      'servir en una copa huracan y decorar con uva isabella o limón'
    ],
    servings: 1
  },
  {
    id: '9',
    title: 'Tinto de verano',
    description: 'Refrescante coctel hecho con vino tinto, limon, uva, hielo y soda',
    image: 'https://dmglassware.com/wp-content/uploads/2025/04/What-Is-a-Hurricane-Cocktail-Glass.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Cocteles',
    ingredients: [
      '1 copa de vino tinto', 
      '1 shot de uva', 
      'Medio shot de limón',
      'Hielo',
      'Sprite o Soda'
     
    ],
    instructions: [
      'Servir el vino tinto antes de la mitad de la copa de vino.',
      'Agregar 1 shot de uva.',
      'Agregar medio shot de limón.',
      'Agregar hielo y sprite o soda al tope.',
      'Decorar con naranja'
      
    ],
    servings: 1
  },
  {
    id: '10',
    title: 'Sangría',
    description: 'Refrescante coctel hecho con vino tinto, frutas variadas, limón, uva, hielo y soda',
    image: 'https://dmglassware.com/wp-content/uploads/2025/04/What-Is-a-Hurricane-Cocktail-Glass.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Cocteles',
    ingredients: [
      '1 copa de vino tinto', 
      '1 shot de uva', 
      'Medio shot de limón',
      'Rodajas de naranja',
      'Uvas Isabella',
      'Manzana roja y verde picada',
      'Hielo',
      'Sprite o Soda'
    ],
    instructions: [
      'Servir el vino tinto antes de la mitad de la copa de vino.',
      'Agregar 1 shot de uva.',
      'Agregar medio shot de limón.',
      'Incorporar rodajas de naranja y manzana.',
      'Agregar hielo y sprite o soda al tope.',
      'Decorar con naranja y frutas variadas'
    ],
    servings: 1
  },
   {
    id: '11',
    title: 'Sangría',
    description: 'Refrescante coctel hecho con vino tinto, frutas variadas, limón, uva, hielo y soda',
    image: 'https://dmglassware.com/wp-content/uploads/2025/04/What-Is-a-Hurricane-Cocktail-Glass.jpg',
    time: '5 min',
    difficulty: 'Fácil',
    category: 'Cocteles',
    ingredients: [
      '1 copa de vino tinto', 
      '1 shot de uva', 
      'Medio shot de limón',
      'Rodajas de naranja',
      'Uvas Isabella',
      'Manzana roja y verde picada',
      'Hielo',
      'Sprite o Soda'
    ],
    instructions: [
      'Servir el vino tinto antes de la mitad de la copa de vino.',
      'Agregar 1 shot de uva.',
      'Agregar medio shot de limón.',
      'Incorporar rodajas de naranja y manzana.',
      'Agregar hielo y sprite o soda al tope.',
      'Decorar con naranja y frutas variadas'
    ],
    servings: 1
  },
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
