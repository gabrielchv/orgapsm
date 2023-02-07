export interface Task {
  name: string; // Name of the task
  description: string; // Description of the task
  importance: number; // Level of importance of the task
  days: number; // Days that the task will be made, so 1 - sunday; 2 - tuesday
  weekly: number | boolean; // Amount of times a task will be repeated weekly
  monthly: number | boolean; // Amount of times a task will be repeated monthly
  date: Date; // The date that the task was created
}
