<script lang="ts">
    import { onMount } from "svelte";
    import type { WithTarget } from "$lib/types/event-with-target";
	import { isTheme } from "$lib/types/theme";
	import type { PageData } from "./$types";

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

<h3>Theme Preferences</h3>
<div class="theme">
    <select bind:value={colorScheme.colorMode}>
        <option value="select">Single theme</option>
        <option value="system">Sync with system</option>
    </select>
    <label class="switch">
        <input type="checkbox"/>
        <span class="slider"></span>
    </label>
</div>


<style lang="postcss">
    .theme {
        display: flex;
        gap: 3rem;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: var(--switch-width);
        height: calc(var(--switch-width) / 2);
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: calc(var(--switch-width) / 2);
        background-color: var(--color-primary);
        transition: 0.4s
    }
    .slider::before {
        position: absolute;
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        left: 0.2rem;
        bottom: 0.2rem;
        border-radius: 50%;
        background-color: white;
        transition: 0.4s;
    }
    input:checked + .slider {
        background-color: blue;
    }
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider::before {
        transform: translateX(2rem);
    }
</style>