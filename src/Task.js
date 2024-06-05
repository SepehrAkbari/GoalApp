import React from "react";
import { View, Text, Button, CheckBox } from "react-native";
import styles from "./styles";

const Task = ({ task, onToggleTask, onRemoveTask, completed }) => {
  return (
    <View style={styles.taskRow}>
      <CheckBox
        value={completed}
        onValueChange={() => onToggleTask(task.task_name)}
        style={styles.checkbox}
      />
      <View style={[styles.task, completed && styles.completedTask]}>
        <Text style={styles.taskName}>{task.task_name}</Text>
        <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text>
        <Button title="Remove" onPress={() => onRemoveTask(task.task_name)} />
      </View>
    </View>
  );
};

export default Task;
