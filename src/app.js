/**
 * Created by alexanderbol on 11/06/2016.
 */
import { Counter } from "./counter.js";
import { CounterView } from "./counterView.js";

var counter = new Counter(10);
// var view = new CounterView(counter);

// view.render();

ReactDOM.render(
    <CounterView
        counter = {counter}
    />,
    document.body
);
