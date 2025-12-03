import React, { createContext, useContext, useState, ReactNode } from 'react';

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

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const initialTodos: Todo[] = [
  {
    title: 'Comprar leite',
    description: 'Ir ao mercado e comprar leite',
    completed: false,
  },
  {
    title: 'Estudar React Native',
    description: 'Ler documentação e fazer exemplos',
    completed: true,
  },
  {
    title: 'Fazer exercícios',
    description: 'Caminhar 30 minutos',
    completed: false,
  },
];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (todo: Omit<Todo, 'completed'>) => {
    setTodos(prev => [...prev, { ...todo, completed: false }]);
  };

  const updateTodo = (index: number, updated: Partial<Todo>) => {
    setTodos(prev =>
      prev.map((todo, idx) =>
        idx === index ? { ...todo, ...updated } : todo
      )
    );
  };

  const removeTodo = (index: number) => {
    setTodos(prev => prev.filter((_, idx) => idx !== index));
  };

  const toggleCompleted = (index: number) => {
    setTodos(prev =>
      prev.map((todo, idx) =>
        idx === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo, toggleCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};