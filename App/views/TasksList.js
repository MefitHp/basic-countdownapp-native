import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types';


class TaskList extends Component {
    state = {
        dataSource: this.props.todos
    }

    render() {
        let { dataSource } = this.state;
        console.log(dataSource)

        return (
            <View style={styles.container}>
                <Text>Hi, fucking thereeee.</Text>
                <FlatList
                    data={dataSource}
                    renderItem={({ item }) =>
                        <Text>{item.task}</Text>
                    }
                    keyExtractor={item => item.task}
                />
            </View>
        )
    }
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15
    }
})
export default TaskList