import { createContext } from "react";

export type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  updateTodo: (index: number, updated: Partial<Todo>) => void;
  removeTodo: (index: number) => void;
  toggleCompleted: (index: number) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
