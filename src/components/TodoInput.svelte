<script lang="ts">
	import { addTodo } from '../stores/todo';

	let todoTitle = '';
	let todoInput: HTMLInputElement;

	const addItem = () => {
		if (todoTitle) {
			addTodo({
				title: todoTitle,
				done: false
			});
			todoInput.focus();
			todoTitle = '';
	    }
	};
</script>

<div>
	<label>
		Add Todo
		<input bind:this={todoInput} bind:value={todoTitle} on:change={addItem} />
	</label>
	<button on:click={addItem}>Add</button>
</div>
