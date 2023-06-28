<script lang="ts">
	import type { WithTarget } from '$lib/types/event-with-target';
	import type { PageData } from './$types';

	export let data: PageData;

	// On load: light, dark, or system
	// If light or dark set select to 'Single Theme'
	//     and set radio group to light or dark theme
	// If system then set select to 'Sync with system'
	//     and make radio group set to the
	// Cookies:
	//     color_mode: select | system
	//     selected_color: light | dark
	//     prefered_color: light | dark

	let colorScheme = data.colorScheme;

	let disableInput = colorScheme.colorMode === 'system' ? true : false;

	function syncOrSet(event: WithTarget<Event, HTMLSelectElement>) {
		if (event.currentTarget.value === 'select') {
			document.documentElement.className = colorScheme.selectedColor;
            colorScheme.colorMode = 'select';
			disableInput = false;
			document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		} else if (event.currentTarget.value === 'system') {
			document.documentElement.className = colorScheme.preferredColor;
            colorScheme.colorMode = 'system';
			disableInput = true;
			document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		}
	}

	function setSelectedColor(event: WithTarget<Event, HTMLInputElement>) {
		if (event.currentTarget.checked) {
			document.documentElement.className = 'dark';
			colorScheme.selectedColor = 'dark';
			document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		} else {
			document.documentElement.className = 'light';
			colorScheme.selectedColor = 'light';
			document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		}
	}
</script>

<header>
	<h3>Settings</h3>
</header>

<main>

	<h3>Theme Preferences</h3>
	<div class="theme-preference">
		<select on:change={syncOrSet}>
			<option value="select" selected={colorScheme.colorMode === 'select'}>Single theme</option>
			<option value="system" selected={colorScheme.colorMode === 'system'}>Sync with system</option>
		</select>
		<label>
			<span class="light-span">Light</span>
			<input
			type="checkbox"
			on:change={setSelectedColor}
			disabled={disableInput}
			checked={colorScheme.selectedColor === 'dark'}
			/>
			<span class="slider">
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
				<span class="icon-part" />
			</span>
			<span class="dark-span">Dark</span>
		</label>
	</div>
</main>

<style lang="postcss">
	main {
		margin: 6rem 0 4rem 0;
	}
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		min-height: 4rem;
		background-color: var(--color-surface-opaque);
        backdrop-filter: blur(0.2rem);
	}
	.theme-preference {
		display: flex;
		gap: 3rem;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		position: relative;
		--slide-toggle-width-half: calc(var(--slide-toggle-width) / 2);
	}
	input {
		cursor: pointer;
		margin: 0;
		left: 0;
		bottom: 0;
		width: var(--slide-toggle-width);
		height: var(--slide-toggle-width-half);
		appearance: none;
		border-radius: var(--slide-toggle-width-half);
		background-color: oklch(85.74% 0.143 92.65);
		transition: 0.18s;
	}
	.light-span {
		user-select: none;
	}
	.dark-span {
		user-select: none;
	}
	.slider {
		position: absolute;
		content: '';
		cursor: pointer;
		--slide-toggle-diameter: calc(var(--slide-toggle-width) * 2 / 5);
		--slide-toggle-margin: calc(var(--slide-toggle-width) / 10);
		width: var(--slide-toggle-diameter);
		height: var(--slide-toggle-diameter);
		right: calc(50% + 0.1rem);
		border-radius: 50%;
		background-color: oklch(71.03% 0.153 74.65);
		--transDur: 0.3s;
		transition: var(--transDur);
	}
	input:checked {
		background-color: oklch(29.85% 0.072 240.88);
	}
	input:checked + .slider {
		transform: translateX(var(--slide-toggle-width-half));
		background-color: oklch(62.21% 0.16 240.88);
	}
	.icon-part {
		position: absolute;
		border-radius: 50%;
		box-shadow: 0.4rem -0.4rem 0 0.5rem hsl(0, 0%, 100%) inset;
		top: calc(50% - 0.4rem);
		left: calc(50% - 0.4rem);
		width: 0.8rem;
		height: 0.8rem;
		transition: box-shadow var(--transDur) ease-in-out, opacity var(--transDur) ease-in-out,
			transform var(--transDur) ease-in-out;
		transform: scale(0.5);
	}
	.icon-part ~ .icon-part {
		background-color: hsl(0, 0%, 100%);
		border-radius: 0.05rem;
		box-shadow: none;
		top: 50%;
		left: calc(50% - 0.05rem);
		transform: rotate(0) translateY(0.4rem);
		transform-origin: 50% 0;
		width: 0.1rem;
		height: 0.2rem;
	}
	.icon-part:nth-child(3) {
		transform: rotate(45deg) translateY(0.4rem);
	}
	.icon-part:nth-child(4) {
		transform: rotate(90deg) translateY(0.4rem);
	}
	.icon-part:nth-child(5) {
		transform: rotate(135deg) translateY(0.4rem);
	}
	.icon-part:nth-child(6) {
		transform: rotate(180deg) translateY(0.4rem);
	}
	.icon-part:nth-child(7) {
		transform: rotate(225deg) translateY(0.4rem);
	}
	.icon-part:nth-child(8) {
		transform: rotate(270deg) translateY(0.4rem);
	}
	.icon-part:nth-child(9) {
		transform: rotate(315deg) translateY(0.4rem);
	}
	input:checked ~ .slider .icon-part:nth-child(1) {
		transform: scale(1);
		box-shadow: 0.2rem -0.2rem 0 0.2rem hsl(0, 0%, 100%) inset;
	}
	input:checked ~ .slider .icon-part ~ .icon-part {
		opacity: 0;
	}
	input:checked ~ .slider .icon-part:nth-child(2) {
		transform: rotate(45deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(3) {
		transform: rotate(90deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(4) {
		transform: rotate(135deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(5) {
		transform: rotate(180deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(6) {
		transform: rotate(225deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(7) {
		transform: rotate(270deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(8) {
		transform: rotate(315deg) translateY(0.8rem);
	}
	input:checked ~ .slider .icon-part:nth-child(9) {
		transform: rotate(360deg) translateY(0.8rem);
	}
</style>
