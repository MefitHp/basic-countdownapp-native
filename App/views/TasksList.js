import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types';
import TaskRow from './TaskRow'


class TaskList extends Component {
    state = {
        dataSource: this.props.todos
    }

    renderRow = ({ item }) => (
        <TaskRow
            todo={item}
        />
    )
    render() {
        let { dataSource } = this.state;

        return (
            //La view padre debe tener un flex 1
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={styles.container}>
                    <FlatList
                        data={dataSource}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.task}
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Add task</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    button: {
        height: 50,
        backgroundColor: 'goldenrod',
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
    },
})
export default TaskList