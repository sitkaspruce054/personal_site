

export const debounce = (callback:any, delay = 250) => {

    let timeoutId:any;

    return (...args:any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            callback(...args);

        },delay);
    }
}


export const throttle = (callback: any, limit = 250) => {
    let wait = false;

    return () => {
        if (!wait) {
            callback.call();

            wait = true;
            setTimeout(() => {
                wait = false;
            },limit)
        }
    }
}