<slot />
<main>
    <form>
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
            <input id="search" enterkeyhint="search"/>
        </label>
    <form>
    <div class="chat">
        <div class="circle">
        </div>
        <div class="description">
            <h3>
                Lorem ipsum dolor sit amet
            </h3>
            <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
        </div>
    </div>
    <div class="chat">
        <div class="circle">
        </div>
        <div class="description">
            <h3>
                Lorem ipsum dolor sit amet
            </h3>
            <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
        </div>
    </div>
    <div class="chat">
        <div class="circle"></div>
        <div class="description">
            <h3>
                Lorem ipsum dolor sit amet
            </h3>
            <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
        </div>
    </div>
</main>

<style lang="postcss">
    main {
        margin: 4rem 0;
    }
    form {
        display: block;
        height: 3rem;
        width: 100%;
    }
    label {
        display: flex;
        background-color: var(--color-input-background);
        margin: 2rem 1rem;
        border-radius: 1rem;
        min-width: 4rem;
        max-height: 2rem;
    }
    input {
        border: none;
        outline: none;
        background-color: inherit;
    }
    label:focus-within {
        outline: var(--color-primary) solid 0.1rem;
    }
    .chat {
        width: 100%;
        border-bottom: 0.1rem solid var(--color-gap);
        display: flex;
        justify-content: space-between;
    }
    .circle {
        border-radius: 100%;
        background-color: blueviolet;
        min-width: 4rem;
        max-height: 4rem;
        margin: 1rem;
    }
    .description {
        display: flex;
        flex-direction: column;
    }
</style>