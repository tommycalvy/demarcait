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

    
</script>

<h1>Settings</h1>

<h3>Theme Preferences</h3>
<select bind:value={theme}>
    <option value="lightOrDark">Single theme</option>
    <option value="system">Sync with system</option>
</select>
<div class="theme-display">
    <div class="theme-mode">
        <input id="light-theme" type="radio" name="theme-mode" value="light" on:change={setTheme} disabled={disableThemeSelection} bind:group={themeSelected} />
        <label for="light-theme">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </span>
            Light
        </label>
    </div>
    
    <div class="theme-mode">
        <input id="dark-theme" type="radio" name="theme-mode" value="dark" on:change={setTheme} disabled={disableThemeSelection} bind:group={themeSelected} />
        <label for="dark-theme" >
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>   
            </span>
            Dark
        </label>
    </div>
</div>

<style lang="postcss">
    .theme-display {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 1rem 0;
    }
    .theme-mode {
        position: relative;
        display: flex;
        justify-content: center;
    }
    span {
        min-width: 1.5rem;
        position: relative;
        margin: 0 0.3rem;
    }
    svg {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    label {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.3rem;
        padding: 0.6rem 1rem 0.6rem 2rem;
        border: 0.1rem solid var(--color-border);
        border-radius: 0.7rem;
    }
    input {
        margin: 0;
        position: absolute;
        left: 10%;
        top: 38%;
        accent-color: var(--color-primary);
        color: var(--color-primary);
    }
    input:checked + label {
        border-color: var(--color-primary);
    }
    @media (prefers-color-scheme: dark) {
        
    }
    select {

    }
</style>