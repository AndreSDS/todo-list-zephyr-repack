/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { TodoList } from './components/TodoList';
import { TodoProvider, useTodos } from './components/TodoContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TodoProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </TodoProvider>
  );
}

function AppContent() {
  const { todos } = useTodos();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minha Todo List</Text>
      <TodoList items={todos} />
    </View>
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
