import { createContext, useState } from "react";
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
};
export const GlobalContext = createContext(initialContext);

// export const ContextWrapper = () => {
// }

export function ContextWrapper(props) {
  const [lightboxVisible, setLightboxVisible] = useState(
    initialContext.lightboxVisible
  );
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(
    initialContext.optionsMenuOpen
  );
  const [taskId, setTaskId] = useState(initialContext.taskId);
  const [tasks, setTasks] = useState(initialContext.tasks);

  function hideLightbox() {
    setLightboxVisible(false);
  }
  function showLightbox() {
    setLightboxVisible(true);
  }
  function updateOptionsMenuStatus(id) {
    setOptionsMenuOpen((pre) => (id === pre ? -1 : id));
  }
  function addTask(text, deadline, color) {
    setTaskId((pre) => pre + 1);
    setTasks((pre) => [...pre, { id: taskId, text, deadline, color }]);
  }
  function remoweTask() {
    console.log("remowing task");
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
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
