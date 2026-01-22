/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import { TodoList } from './components/TodoList';

function App({ ...props }) {
  return (
    <AppContent {...props} />
  );
}

const AppContent = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
      <TodoList />
    </View>
  )
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
