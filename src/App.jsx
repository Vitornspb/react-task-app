import AddTask from "./components/AddTask";
import TasksList from "./components/Tasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação oficial e fazer exercícios práticos",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "Comprar frutas, vegetais e itens essenciais para a semana",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Exercitar-se",
      description: "Fazer uma caminhada de 30 minutos no parque",
      isCompleted: false,
    },
  ]);
  return (
    <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Gerenciador de Tarefas
        </h1>
        <AddTask setTasks={setTasks} />
        <TasksList tasks={tasks} />
      </div>
    </div>
  );
}
