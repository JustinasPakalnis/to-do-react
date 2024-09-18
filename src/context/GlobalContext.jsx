import { createContext, useEffect, useState } from "react";
export const initialContext = {
  lightboxVisible: false,
  hideLightbox: () => {},
  showLightbox: () => {},
  optionsMenuOpen: -1,
  updateOptionsMenuStatus: () => {},
  taskId: 0,
  tasks: [],
  addTask: () => {},
  remoweTask: () => {},
  updateTask: () => {},
  changeTaskStatus: () => {},
};
export const GlobalContext = createContext(initialContext);

// export const ContextWrapper = () => {
// }

function initialStateValue(localStorageKey, defaultValue) {
  const localData = localStorage.getItem(localStorageKey);

  if (localData) {
    try {
      const data = JSON.parse(localData);
      return data;
    } catch (error) {
      console.log("error marderfaka");
    }
  }
  return defaultValue;
}

export function ContextWrapper(props) {
  const [lightboxVisible, setLightboxVisible] = useState(
    initialContext.lightboxVisible
  );
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(
    initialContext.optionsMenuOpen
  );
  const [taskId, setTaskId] = useState(
    initialStateValue("51gr_todo_id", initialContext.taskId)
  );
  const [tasks, setTasks] = useState(
    initialStateValue("51gr_todo_tasks", initialContext.tasks)
  );

  useEffect(() => {
    localStorage.setItem("51gr_todo_tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("51gr_todo_id", JSON.stringify(taskId));
  }, [taskId]);

  useEffect(() => {
    console.log("be masyvo - komponentas perpiestas is naujo");
  });

  function hideLightbox() {
    setLightboxVisible(false);
  }
  function showLightbox() {
    setLightboxVisible(true);
  }
  function updateOptionsMenuStatus(id) {
    setOptionsMenuOpen((pre) => (id === pre ? -1 : id));
  }

  // localStorage.setItem(
  //   "51gr_todo",
  //   JSON.stringify([...tasks, { id: taskId + 1, text, deadline, color }])
  // );

  function addTask(text, deadline, color) {
    setTaskId((pre) => pre + 1);
    setTasks((pre) => [
      ...pre,
      { id: taskId + 1, text, deadline, color, status: "todo" },
    ]);
  }
  function remoweTask(id) {
    setTasks((pre) => pre.filter((task) => task.id !== id));
  }

  function changeTaskStatus(id, status) {
    setTasks((pre) =>
      pre.map((task) => ({
        ...task,
        status: task.id === id ? status : task.status,
      }))
    );
  }

  function updateTask() {
    console.log("Updating task");
  }

  const value = {
    lightboxVisible,
    hideLightbox,
    showLightbox,
    optionsMenuOpen,
    updateOptionsMenuStatus,
    taskId,
    tasks,
    addTask,
    remoweTask,
    updateTask,
    changeTaskStatus,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
