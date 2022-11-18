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

<h1>Todo List</h1>

<main>
	<label>
		Add Todo:
		<input bind:this={todoInput} bind:value={todoTitle} on:change={addTodo} />
	</label>
	<button on:click={addTodo}>Add</button>

	<div>
		<h2>To do:</h2>
		<ul>
			{#each $todos as { title }}
				<li>{title}</li>
			{/each}
		</ul>
	</div>
</main>
