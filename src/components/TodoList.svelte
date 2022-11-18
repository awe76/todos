<script lang="ts">
	import todos from '../stores/todo';
</script>

<div>
	<h2>To do:</h2>
	<ul>
		{#each $todos as { title }}
			<li>{title}</li>
		{/each}
	</ul>
</div>
