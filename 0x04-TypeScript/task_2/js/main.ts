export interface AdminInterface {
  performRemoteWork(): string;
  takeCoffeeBreak(): string;
  performAdminTasks(): string;
}

export interface EducatorInterface {
  performRemoteWork(): string;
  takeCoffeeBreak(): string;
  performEducatorTasks(): string;
}

export class Admin implements AdminInterface {
  performRemoteWork() {
    return 'Working from home';
  }

  takeCoffeeBreak() {
    return 'Taking a coffee break';
  }

  performAdminTasks() {
    return 'Performing admin tasks';
  }
}

export class Educator implements EducatorInterface {
  performRemoteWork() {
    return 'Cannot work from home';
  }

  takeCoffeeBreak() {
    return 'Cannot take a break';
  }

  performEducatorTasks() {
    return 'Performing educator tasks';
  }
}

export function hireEmployee(salary: (number | string)): (Admin | Educator) {
  if (typeof salary === 'number' && salary < 500) {
    return new Educator();
  }
  return new Admin();
}

export function isAdmin(employee: (Admin | Educator)) {
  return employee instanceof Admin;
}

export function executeTask(employee: (Admin | Educator)) {
  if (isAdmin(employee)) {
    return (employee as Admin).performAdminTasks();
  }
  return (employee as Educator).performEducatorTasks();
}

export type Classes = ('Math' | 'History');

export function conductClass(currentClass: Classes): string {
  if (currentClass === 'Math') {
    return 'Teaching Math';
  }
  if (currentClass === 'History') {
    return 'Teaching History';
  }
}
