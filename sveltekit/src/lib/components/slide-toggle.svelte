<label>
    <input type="checkbox"/>
    <span class="slider"></span>
</label>

<style lang="postcss">
    label {
        position: relative;
        display: inline-block;
        --slide-toggle-width-half: calc(var(--slide-toggle-width) / 2);
        width: var(--slide-toggle-width);
        height: var(--slide-toggle-width-half);
    }
    input {
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
        border-radius: var(--slide-toggle-width-half);
        background-color: var(--color-primary);
        transition: 0.18s;
    }
    .slider::before {
        position: absolute;
        content: "";
        width: calc(var(--slide-toggle-width) * 2 / 5);
        height: calc(var(--slide-toggle-width) * 2 / 5);
        left: calc(var(--slide-toggle-width) / 20);;
        bottom: calc(var(--slide-toggle-width) / 20);;
        border-radius: 50%;
        background-color: oklch(85% 0 0);
        transition: 0.18s;
    }
    input:checked + .slider {
        background-color: blue;
    }
    input:checked + .slider::before {
        transform: translateX(var(--slide-toggle-width-half));
    }
</style>