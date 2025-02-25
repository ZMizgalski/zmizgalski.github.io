export const scrollIntoView = (document: Document, options: ScrollIntoViewOptions = { behavior: 'smooth' }) => (id: string) => {
    const element = document.querySelector(`#${id}`);

    if (!element) {
        return;
    }

    element.scrollIntoView(options);
};
