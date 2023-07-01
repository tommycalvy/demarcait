export const scrollMaxValue = () => {
    const body = document.body;
    const html = document.documentElement;

    const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const windowHeight = window.innerHeight;

    return documentHeight - windowHeight;
};