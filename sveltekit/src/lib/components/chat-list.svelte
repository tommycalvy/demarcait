<script>
	import SearchBar from "$lib/components/search-bar.svelte";

</script>
<main>
	<SearchBar />
	<div class="border" />
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
	<div class="chat">
		<div class="circle" />
		<div class="description">
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur aut perferendis doloribus asperiores repellat."
			</p>
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		padding: 0.1rem 0;
	}
	.border {
		width: 100%;
		position: sticky;
		top: 3.9rem;
		background-color: var(--color-gap);
		height: 0.1rem;
		z-index: -1;
	}
	
	.chat {
		width: 100%;
		border-bottom: 0.1rem solid var(--color-gap);
		display: flex;
		justify-content: space-between;
		padding-right: 0.6rem;
	}
	.circle {
		border-radius: 100%;
		background-color: darkmagenta;
		min-width: 3rem;
		max-height: 3rem;
		margin: 1rem;
	}
	.description {
		display: flex;
		flex-direction: column;
	}
</style>
