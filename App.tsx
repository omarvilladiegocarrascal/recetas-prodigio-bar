
import React, { useState, useEffect, useCallback } from 'react';
import { Recipe } from './types';
import { INITIAL_RECIPES, Icons } from './constants';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(INITIAL_RECIPES.map(r => r.category)))];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'Todos' || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="min-h-screen pb-20">
      {/* Navbar / Hero */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
              <Icons.ChefHat />
            </div>
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
              Recetas Bar
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-stone-500">
              <a href="#" className="text-stone-900 border-b-2 border-orange-600 pb-1">Inicio</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Populares</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Mis Favoritos</a>
            </nav>
            <button className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all shadow-md">
              Crear Receta
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-12">
        {/* Search & AI Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Recetas Bar <br /> <span className="text-orange-600 italic font-serif">Restaurante Prodigio</span> 
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-stone-200/50 flex flex-col md:flex-row gap-2 border border-stone-50">
            <div className="flex-1 flex items-center px-4 gap-3 bg-stone-50 rounded-xl">
              <Icons.Search />
              <input 
                type="text" 
                placeholder="Busca por nombre o ingrediente..." 
                className="bg-transparent w-full py-4 text-stone-800 placeholder-stone-400 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          
            
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                : 'bg-white text-stone-500 hover:bg-stone-50 border border-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={setSelectedRecipe} 
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
                 <Icons.Search />
              </div>
              <p className="text-stone-500 text-lg">No encontramos recetas con esos criterios.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('Todos');}}
                className="mt-4 text-orange-600 font-bold hover:underline"
              >
                Ver todas las recetas
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Detail Overlay */}
      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}

      {/* Footer */}
      <footer className="mt-20 border-t border-stone-200 py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Icons.ChefHat />
              </div>
            </div>
            
          </div>
          <div className="flex gap-8 text-sm font-semibold text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Términos</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Contacto</a>
          </div>
         
        </div>
      </footer>
    </div>
  );
};

export default App;
