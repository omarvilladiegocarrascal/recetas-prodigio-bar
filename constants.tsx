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
    category: 'Coctelería',
    ingredients: [
      '60 ml o un shot de aguardiente',
      '1 lima',
      '2 cucharaditas de azúcar',
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
