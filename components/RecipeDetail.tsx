
import React from 'react';
import { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-500">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 h-64 md:h-auto relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
          <div className="absolute bottom-6 left-6 text-white md:hidden">
            <h2 className="text-3xl font-bold">{recipe.title}</h2>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
           <button 
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <div className="hidden md:block mb-6">
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-2 block">{recipe.category}</span>
            <h2 className="text-4xl font-bold text-stone-900 leading-tight mb-4">{recipe.title}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-50 p-4 rounded-xl text-center">
              <span className="text-stone-400 text-xs block mb-1">Tiempo</span>
              <span className="font-bold text-stone-800">{recipe.time}</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl text-center">
              <span className="text-stone-400 text-xs block mb-1">Dificultad</span>
              <span className="font-bold text-stone-800">{recipe.difficulty}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              Ingredientes
            </h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                  </div>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              Pasos de Preparación
            </h3>
            <div className="space-y-6">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-3xl font-serif italic text-stone-200 flex-shrink-0 leading-none">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-stone-600 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
