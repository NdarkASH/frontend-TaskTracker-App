import Task from "./Task";
interface TaskList {
  id: string | undefined;
  title: string;
  description: string | undefined;
  count: number | undefined;
  progress: number | undefined;
  task: Task[] | undefined;
}
export default TaskList;
