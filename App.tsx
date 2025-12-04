/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import { TodoList } from './components/TodoList';
import { TodoProvider, useTodos } from './components/TodoContext';

function App({ ...props }) {
  const { todos } = useTodos();

  return (
    <TodoProvider>
      <View style={styles.container}>
        <Text style={styles.header}>{props.title}</Text>
        <TodoList items={todos} />
      </View>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    alignSelf: 'center',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});

export default App;
