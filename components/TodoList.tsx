import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
  //const { todos } = useTodos();

  return (
    <Text>Mini App Carregado Com Sucesso!</Text>
    // <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
    //   {todos.map((todo, idx) => (
    //     <TodoItem
    //       key={idx}
    //       title={todo.title}
    //       description={todo.description}
    //       completed={todo.completed}
    //       index={idx}
    //     />
    //   ))}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
