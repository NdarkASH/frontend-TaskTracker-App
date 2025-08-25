import TaskList from "./components/domain/TaskList";
import Task from "./components/domain/Task";

interface AppState {
  TaskList: TaskList[];
  tasks: { [taskListId: string]: Task[] };
}

export interface AppResponse<T> {
  code: number;
  message: string;
  data: T;
}

type Action =
  | { type: "FETCH_TASKLISTS"; payload: TaskList[] }
  | { type: "GET_TASKLISTS"; payload: TaskList }
  | { type: "CREATE_TASKLIST"; payload: TaskList }
  | { type: "UPDATE_TASKLIST"; payload: TaskList }
  | { type: "DELETE_TASKLIST"; payload: string }
  | { type: "FETCH_TASKS"; payload: { taskListId: string; tasks: Task[] } }
  | { type: "CREATE_TASK"; payload: { taskListId: String; tasks: Task[] } }
  | { type: "GET_TASK"; payload: { taskListId: string; task: Task } }
  | {
      type: "UPDATE_TASK";
      payload: { taskListId: string; taskId: string; task: Task };
    }
  | { type: "DELETE_TASK"; payload: { taskListId: string; taskId: string } };

const FETCH_TASKLISTS = "FETCH_TASKLISTS";
const GET_TASKLIST = "GET_TASKLIST";
const CREATE_TASKLIST = "CREATE_TASKLIST";
const UPDATE_TASKLIST = "UPDATE_TASKLIST";
const DELETE_TASKLIST = "DELETE_TASKLIST";
const FETCH_TASKS = "FETCH_TASKS";
const CREATE_TASK = "CREATE_TASK";
const GET_TASK = "GET_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";
