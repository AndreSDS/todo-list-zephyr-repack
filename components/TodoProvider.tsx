import React, { useState, ReactNode } from 'react';
import { Todo, TodoContext } from '../contexts/todoContext';

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

const TodoProvider = ({ children }: { children: ReactNode }) => {
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



export default TodoProvider;