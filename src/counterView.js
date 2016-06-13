/**
 * Created by alexanderbol on 11/06/2016.
 */
import { Toolbar } from "./toolbar.js";

export class CounterView extends React.Component {

    constructor(props)
    {
        super(props);
        this.counter = props.counter;
        this.state = {value: props.counter.value};
    }

    increment() {
        this.counter.increment();
        this.setState({
            value: this.counter.value
        });
    };

    decrement() {
        this.counter.decrement();
        this.setState({
            value: this.counter.value
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <Toolbar
                    incrementButtonLabel="Increment"
                    onIncrementButtonClicked={() => this.increment()}
                    decrementButtonLabel="Decrement"
                    onDecrementButtonClicked={() => this.decrement()}
                />
            </div>
        )
    };
};
