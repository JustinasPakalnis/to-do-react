import React, { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Form } from "./components/form/Form";

export function App() {
  const [cardMenuVisibleById, setCardMenuVisibleById] = useState(-1);
  const [lightboxVisible, seLightboxVisible] = useState(false);
  const [task, setTasks] = useState([]);

  function hideOptionsMenu() {
    setCardMenuVisibleById(-1);
  }

  function showOptionsMenu(id) {
    setCardMenuVisibleById(id === cardMenuVisibleById ? -1 : id);
  }

  function showLightbox() {
    seLightboxVisible(true);
  }

  function addTask(text, deadline, color) {
    setTasks((pre) => [...pre, { text, deadline, color }]);
    console.log(task);
  }
  return (
    <>
      <Header onClick={hideOptionsMenu} showLightbox={showLightbox} />
      <Main
        task={task}
        onClick={hideOptionsMenu}
        showOptionsMenu={showOptionsMenu}
        cardMenuVisibleById={cardMenuVisibleById}
        lightboxVisible={lightboxVisible}
      />
      <Footer onClick={hideOptionsMenu} />
      <Form lightboxVisible={lightboxVisible} addTask={addTask} />
    </>
  );
}
