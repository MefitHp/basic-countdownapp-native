import React from 'react';
import { View } from 'react-native';
import TasksList from './App/views/TasksList'

export default class App extends React.Component {
  state = {
    todos: [
      {
        task: 'Learn React Native'
      },
      {
        task: 'Learn Redux'
      }
    ]
  }

  render() {
    return (
      <View>
        <TasksList
          todos={this.state.todos}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
