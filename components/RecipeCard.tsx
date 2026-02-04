
import React from 'react';
import { Recipe } from '../types';
import { Icons } from '../constants';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      className="recipe-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-stone-100 flex flex-col"
      onClick={() => onClick(recipe)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-image w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-orange-600 uppercase tracking-wider">
            {recipe.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-stone-500 text-sm line-clamp-2 mb-4">
          {recipe.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between text-stone-400 text-xs font-medium">
          <div className="flex items-center gap-1">
            <Icons.Clock />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.ChefHat />
            <span>{recipe.difficulty}</span>
          </div>
          <div className="bg-stone-50 px-2 py-1 rounded">
            {recipe.servings} raciones
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
