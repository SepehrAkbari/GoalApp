import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  dashboard: {
    width: 250,
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  goals: {
    marginTop: 20,
    flex: 1,
  },
  goalItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  goalName: {
    fontSize: 18,
  },
  addGoalFormContainer: {
    marginTop: 'auto', // Push the add goal form to the bottom
  },
  addGoalForm: {
    marginTop: 20,
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deadline: {
    fontSize: 16,
    color: "#555",
  },
  tasks: {
    marginTop: 20,
  },
  task: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDeadline: {
    fontSize: 14,
    color: "#999",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  addTaskForm: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default styles;
