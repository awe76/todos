<script lang="ts">
	import todos, { deleteTodo } from '../stores/todo';
</script>

<div>
    {#if $todos.length > 0}
	    <h2>Todos</h2>
    {/if}
	<ul>
		{#each $todos as { title, key, done } (key)}
			<li>
				<label>
					<input type="checkbox" bind:checked={done} />
					<input type="text" bind:value={title} />
				</label>
				<button on:click={() => deleteTodo(key)}>del</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	li {
		list-style-type: none;
	}
</style>
