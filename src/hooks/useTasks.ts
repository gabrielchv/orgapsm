import { useEffect, useState } from "react";
import { Task } from "../utils/types";
import { getData, storeData } from "../utils/utils";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sawData, setSawData] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      setSawData(true);
      setTasks(data);
    });
  }, []);

  useEffect(() => {
    if (sawData) {
      storeData(tasks);
      console.log("data stored");
    }
  }, [JSON.stringify(tasks)]);

  return { tasks, setTasks };
};

export default useTasks;
