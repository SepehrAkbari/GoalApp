import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import user from "./users";
import profilePicture from "../assets/images/profilePic.jpeg";

const Dashboard = ({ goals, onAddGoal, onSelectGoal }) => {
  const [newGoalName, setNewGoalName] = useState("");
  const [newGoalDeadline, setNewGoalDeadline] = useState("");

  const handleAddGoal = () => {
    if (newGoalName && newGoalDeadline) {
      onAddGoal(newGoalName, newGoalDeadline);
      setNewGoalName("");
      setNewGoalDeadline("");
    }
  };

  return (
    <View style={styles.dashboard}>
      <View style={styles.userProfile}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.userName}>Hello, {user.firstName}</Text>
      </View>
      <Text style={styles.sectionTitle}>Goals:</Text>
      <View style={styles.goals}>
        {goals.map((goal, index) => (
          <TouchableOpacity key={index} style={styles.goalItem} onPress={() => onSelectGoal(goal.goal_name)}>
            <Text style={styles.goalName}>{goal.goal_name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.addGoalFormContainer}>
        <View style={styles.addGoalForm}>
          <TextInput
            style={styles.input}
            placeholder="Goal Name"
            value={newGoalName}
            onChangeText={setNewGoalName}
          />
          <TextInput
            style={styles.input}
            placeholder="Deadline (YYYY-MM-DD)"
            value={newGoalDeadline}
            onChangeText={setNewGoalDeadline}
          />
          <Button title="Add Goal" onPress={handleAddGoal} />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
