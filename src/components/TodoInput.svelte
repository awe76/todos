<script lang="ts">
	import todos from '../stores/todo';
	import type { Todo } from '../stores/todo';

	let todoTitle = '';
	let todoInput: HTMLInputElement;

	const addTodo = () => {
		const todo: Todo = {
			title: todoTitle,
			done: false
		};

		todos.update((current) => [...current, todo]);
		todoInput.focus();
		todoTitle = '';
	};
</script>

<div>
	<label>
		Add Todo:
		<input bind:this={todoInput} bind:value={todoTitle} on:change={addTodo} />
	</label>
	<button on:click={addTodo}>Add</button>
</div>
