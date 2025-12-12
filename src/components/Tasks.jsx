import { ChevronRightIcon } from "lucide-react";
import PropTypes from "prop-types";

export default function Tasks({ tasks }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className="p-2 text-left text-white bg-slate-400 w-full rounded-md">
            {task.title}
          </button>
          <button className="p-2 text-white bg-slate-400 rounded-md">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
};
