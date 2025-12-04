import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TodoItem } from './TodoItem';
import { Todo } from './TodoContext';

type TodoListProps = {
  title?: string;
  items: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({ title, items }) => (
  <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
    <Text>{title}</Text>

    {items.map((todo, idx) => (
      <TodoItem
        key={idx}
        title={todo.title}
        description={todo.description}
        completed={todo.completed}
        index={idx}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});