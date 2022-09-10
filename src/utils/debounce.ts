export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(cb: F, delay = 500) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<F>) => {
        /* clear existing timeouts if any */
        clearTimeout(timeout);
        timeout = setTimeout(() => cb(...args), delay);
    };
};

