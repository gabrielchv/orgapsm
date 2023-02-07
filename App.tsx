import React, { useState } from "react";
import { NativeBaseProvider, Box, Button, Menu } from "native-base";
import Task from "./src/components/atomic/Task";
import DialogSimpleTask from "./src/components/atomic/DialogSimpleTask";
import useTasks from "./src/hooks/useTasks";

export default function App() {
  const [simpleTaskIsOpen, setSimpleTaskIsOpen] = useState(false);
  const { tasks, setTasks } = useTasks();

  return (
    <NativeBaseProvider>
      <Box
        flexDir="row-reverse"
        safeArea
        p="2"
        bgColor="warmGray.400"
        w="100%"
        h="16"
      >
        <Menu
          trigger={(triggerProps) => (
            <Button p="0" px="5" {...triggerProps}>
              Adicionar Task
            </Button>
          )}
        >
          <Menu.Item
            onPress={() => {
              setSimpleTaskIsOpen(true);
            }}
          >
            Task Simples
          </Menu.Item>
          <Menu.Item
            onPress={() => {
              setTasks([]);
            }}
          >
            Apagar todas as tasks
          </Menu.Item>
          <Menu.Item
            onPress={() => {
              const date = new Date();
              console.log(new Date());
            }}
          >
            Date
          </Menu.Item>
        </Menu>
      </Box>
      <Box m="2">
        {tasks.map((task, i) => (
          <Task key={i} name={task.name} />
        ))}
      </Box>
      <DialogSimpleTask
        isOpen={simpleTaskIsOpen}
        setIsOpen={setSimpleTaskIsOpen}
        setTasks={setTasks}
      />
    </NativeBaseProvider>
  );
}
