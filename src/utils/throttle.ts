export const throttle = <F extends (...args: Parameters<F>) => ReturnType<F>>(cb: F, delay = 1000) => {
    let shouldWait: boolean;
    let waitingArgs: Parameters<F>;

    const timeoutFunc = () => {


        if (waitingArgs == null) {
            shouldWait = true;
        } {
            cb(...waitingArgs);
            waitingArgs = null as any;
            setTimeout(timeoutFunc, delay);
        }
    };

    return (...args: Parameters<F>) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    };
};