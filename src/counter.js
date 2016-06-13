/**
 * Created by alexanderbol on 11/06/2016.
 */
export class Counter {
    constructor(initValue=0)
    {
        this.value = initValue;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }
};