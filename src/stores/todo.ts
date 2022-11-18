import { writable } from 'svelte/store';

export type Todo = {
	title: string;
	done: boolean;
};

const todos = writable<Todo[]>([]);
export default todos;
