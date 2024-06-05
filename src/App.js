import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, Button } from "react-native";
import styles from "./styles";
import Dashboard from "./Dashboard";
import Task from "./Task";
import initialGoalData from "./goalData"; 

const App = () => {
  const [goals, setGoals] = useState([initialGoalData]);
  const [currentGoal, setCurrentGoal] = useState(initialGoalData);
  const [tasks, setTasks] = useState(initialGoalData.tasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDeadline, setNewTaskDeadline] = useState("");

  const handleToggleTask = (taskName) => {
    const isCompleted = completedTasks.some((task) => task.task_name === taskName);
    if (isCompleted) {
      // Move task back to incomplete tasks
      const newCompletedTasks = completedTasks.filter((task) => task.task_name !== taskName);
      const taskToMove = completedTasks.find((task) => task.task_name === taskName);
      setTasks([...tasks, taskToMove]);
      setCompletedTasks(newCompletedTasks);
    } else {
      // Move task to completed tasks
      const newTasks = tasks.filter((task) => task.task_name !== taskName);
      const taskToMove = tasks.find((task) => task.task_name === taskName);
      setCompletedTasks([...completedTasks, taskToMove]);
      setTasks(newTasks);
    }
  };

  const handleAddTask = () => {
    if (newTaskName && newTaskDeadline) {
      const newTask = {
        task_name: newTaskName,
        deadline: newTaskDeadline,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName("");
      setNewTaskDeadline("");
    }
  };

  const handleRemoveTask = (taskName) => {
    setTasks(tasks.filter((task) => task.task_name !== taskName));
    setCompletedTasks(completedTasks.filter((task) => task.task_name !== taskName));
  };

  const handleAddGoal = (goalName, goalDeadline) => {
    const newGoal = {
      goal_name: goalName,
      deadline: goalDeadline,
      tasks: [],
    };
    setGoals([...goals, newGoal]);
  };

  const handleSelectGoal = (goalName) => {
    const selectedGoal = goals.find((goal) => goal.goal_name === goalName);
    setCurrentGoal(selectedGoal);
    setTasks(selectedGoal.tasks);
    setCompletedTasks([]);
  };

  return (
    <View style={styles.container}>
      <Dashboard goals={goals} onAddGoal={handleAddGoal} onSelectGoal={handleSelectGoal} />
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{currentGoal.goal_name}</Text>
          <Text style={styles.deadline}>Deadline: {currentGoal.deadline}</Text>
        </View>
        <View style={styles.tasks}>
          <Text style={styles.sectionTitle}>Incomplete Tasks</Text>
          {tasks.map((task, index) => (
            <Task key={index} task={task} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
          ))}
        </View>
        {completedTasks.length > 0 && (
          <View style={styles.tasks}>
            <Text style={styles.sectionTitle}>Completed Tasks</Text>
            {completedTasks.map((task, index) => (
              <Task key={index} task={task} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} completed />
            ))}
          </View>
        )}
        <View style={styles.addTaskForm}>
          <Text style={styles.sectionTitle}>Add a New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={newTaskName}
            onChangeText={setNewTaskName}
          />
          <TextInput
            style={styles.input}
            placeholder="Deadline (YYYY-MM-DD)"
            value={newTaskDeadline}
            onChangeText={setNewTaskDeadline}
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
