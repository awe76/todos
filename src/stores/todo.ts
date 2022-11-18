import { writable } from 'svelte/store';

let key = 1;
const todos = writable<Todo[]>([]);

export type Todo = {
	key?: number;
	title: string;
	done: boolean;
};

export const addTodo = (todo: Todo) => {
	key += 1;
	todo.key = key;
	todos.update((current) => [...current, todo]);
};

export const deleteTodo = (key?: number) => {
	if (key) {
		todos.update((current) => current.filter((item) => item.key != key));
	}
};

export default todos;
