<script lang="ts">
    import { onMount } from "svelte";
    import type { WithTarget } from "$lib/types/event-with-target";
	import { isTheme } from "$lib/types/theme";
	import type { PageData } from "./$types";
	import SlideToggle from "$lib/components/slide-toggle.svelte";

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

    /*

    let theme = data.theme === 'light' || data.theme === 'dark' ? 'lightOrDark' : 'system';

    let prefersColorScheme: 'light' | 'dark' = 'light';

    let themeSelected = theme === 'system' ? prefersColorScheme : data.theme;

    $: disableThemeSelection = theme === 'system';
    
    function syncOrSet(event: WithTarget<Event, HTMLSelectElement>) {

    }
    
    function setTheme(event: WithTarget<Event, HTMLInputElement>) {
        if (isTheme(event.currentTarget.value)) {
            document.documentElement.className = event.currentTarget.value;
            if (event.currentTarget.value === 'system') {
                theme = 'system';
            } else {
                theme = 'lightOrDark';
            }
            document.cookie = `theme=${event.currentTarget.value};path="/";samesite=lax;secure`;
        }
    }

    onMount(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            prefersColorScheme = 'dark';
        } else {
            prefersColorScheme = 'light';
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            prefersColorScheme = event.matches ? "dark" : "light";
        });
    })
    */

    

    
</script>

<h1>Settings</h1>
<SlideToggle />
<h3>Theme Preferences</h3>
<div class="theme-preference">
    <select bind:value={colorScheme.colorMode}>
        <option value="select">Single theme</option>
        <option value="system">Sync with system</option>
    </select>
    <label>
        <span class="light-span">Light</span>
        <input type="checkbox"/>
        <span class="slider">
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
            <span class="icon-part"></span>
        </span>
        <span class="dark-span">Dark</span>
    </label>
</div>


<style lang="postcss">
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
        background-color: var(--color-primary);
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
        content: "";
        cursor: pointer;
        --slide-toggle-diameter: calc(var(--slide-toggle-width) * 2 / 5);
        --slide-toggle-margin: calc(var(--slide-toggle-width) / 10);
        width: var(--slide-toggle-diameter);
        height: var(--slide-toggle-diameter);
        right: 0;
        border-radius: 50%;
        background-color: oklch(0% 0 0);
        transition: 0.18s;
    }
    input:checked {
        background-color: grey;
    }
    input:checked + .slider {
        transform: translateX(var(--slide-toggle-width-half));
    }
    .icon-part {
        position: absolute;
        border-radius: 50%;
        box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
        top: calc(50% - 0.5em);
        left: calc(50% - 0.5em);
        width: 1em;
        height: 1em;
        transition: box-shadow var(--transDur) ease-in-out,
            opacity var(--transDur) ease-in-out, transform var(--transDur) ease-in-out;
        transform: scale(0.5);
    }
    .icon-part ~ .icon-part {
        background-color: hsl(0, 0%, 100%);
        border-radius: 0.05em;
        box-shadow: none;
        top: 50%;
        left: calc(50% - 0.05em);
        transform: rotate(0) translateY(0.5em);
        transform-origin: 50% 0;
        width: 0.1em;
        height: 0.2em;
    }
    .icon-part:nth-child(3) {
        transform: rotate(45deg) translateY(0.5em);
    }
    .icon-part:nth-child(4) {
        transform: rotate(90deg) translateY(0.5em);
    }
    .icon-part:nth-child(5) {
        transform: rotate(135deg) translateY(0.5em);
    }
    .icon-part:nth-child(6) {
        transform: rotate(180deg) translateY(0.5em);
    }
    .icon-part:nth-child(7) {
        transform: rotate(225deg) translateY(0.5em);
    }
    .icon-part:nth-child(8) {
        transform: rotate(270deg) translateY(0.5em);
    }
    .icon-part:nth-child(9) {
        transform: rotate(315deg) translateY(0.5em);
    }
    input:checked ~ .slider .icon-part:nth-child(1) {
        transform: scale(1);
        box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
    }
    input:checked ~ .slider .icon-part ~ .icon-part {
        opacity: 0;
    }
    input:checked ~ .slider .icon-part:nth-child(2) {
        transform: rotate(45deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(3) {
        transform: rotate(90deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(4) {
        transform: rotate(135deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(5) {
        transform: rotate(180deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(6) {
        transform: rotate(225deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(7) {
        transform: rotate(270deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(8) {
        transform: rotate(315deg) translateY(0.8em);
    }
    input:checked ~ .slider .icon-part:nth-child(9) {
        transform: rotate(360deg) translateY(0.8em);
    }
</style>