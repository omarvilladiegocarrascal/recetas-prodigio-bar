
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  category: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
}

export interface GeminiResponse {
  recipe?: Recipe;
  message?: string;
}
