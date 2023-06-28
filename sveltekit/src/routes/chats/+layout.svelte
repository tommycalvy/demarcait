<script lang="ts">
    let y: number;

</script>

<svelte:window bind:scrollY={y} />

<slot />
<main>
    <form id="search-form" action="?/searchChats" method="post" style="opacity: {1 - Math.max(0, y / 30)}">
		<label for="search">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
			<input id="search" enterkeyhint="search" placeholder="Search" />
		</label>
	</form>
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
		margin: 4rem 0;
        padding: 0.1rem 0;
	}
	.border {
		width: 100%;
		position: sticky;
		top: 4rem;
		background-color: var(--color-gap);
		height: 0.1rem;
	}
	form {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 0.5rem 0 1rem 0;
		padding: 0 2rem;
	}
	label {
		display: flex;
		flex-grow: 1;
		gap: 0.5rem;
		background-color: var(--color-input-background);
		border-radius: 1rem;
		max-width: 25rem;
		max-height: 2.2rem;
		padding: 0 1rem;
	}
	input {
		border: none;
		outline: none;
		background-color: inherit;
		width: 100%;
		font-size: 1rem;
	}
	label:focus-within {
		outline: var(--color-primary) solid 0.1rem;
	}
	svg {
		padding: 0.4rem;
		max-width: 2.2rem;
		color: var(--color-input-icon);
	}
	.chat {
		width: 100%;
		border-bottom: 0.1rem solid var(--color-gap);
		display: flex;
		justify-content: space-between;
        margin: 0 0.2rem;
	}
	.circle {
		border-radius: 100%;
		background-color: blueviolet;
		min-width: 3rem;
		max-height: 3rem;
		margin: 1rem;
	}
	.description {
		display: flex;
		flex-direction: column;
	}
</style>
