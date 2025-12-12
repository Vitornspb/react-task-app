import PropTypes from "prop-types";

export default function AddTask({ setTasks }) {
  return <h1>Add Task</h1>;
}

AddTask.propTypes = {
  setTasks: PropTypes.func.isRequired,
};
