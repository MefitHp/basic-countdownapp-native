import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export const TaskRow = ({ todo }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{todo.task}</Text>
    </View>
)

TaskRow.propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired
    }).isRequired
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E7E7E7',
        padding: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    }
})

export default TaskRow
