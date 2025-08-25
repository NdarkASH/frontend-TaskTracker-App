import { TaskPriority } from "./TaskPriority";
import { TaskStatus } from "./TaskStatus";


interface Task {
    id: string | undefined;
    title: string;
    decription: string;
    dueDate: Date | undefined;
    priority: TaskPriority;
    status: TaskStatus | undefined;
}

export default Task;