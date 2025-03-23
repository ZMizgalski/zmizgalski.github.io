import { Router } from '@angular/router';


export const scrollIntoView = (document: Document, router: Router, options: ScrollIntoViewOptions = { behavior: 'smooth' }) => (id: string) => {
    if (!id) {
        return;
    }

    const element = document.querySelector(`#${id}`);

    if (!element) {
        return;
    }

    router.navigate(
        [],
        {
            queryParamsHandling: 'replace',
            queryParams: {
                id
            }
        }
    );

    element.scrollIntoView(options);
};
