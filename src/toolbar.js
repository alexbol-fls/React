/**
 * Created by alexanderbol on 12/06/2016.
 */
export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onIncrementButtonClicked}>
                    <h3>{this.props.incrementButtonLabel}</h3>
                </button>
                <button onClick={this.props.onDecrementButtonClicked}>
                    <h3>{this.props.decrementButtonLabel}</h3>
                </button>
            </div>
        )
    }
}
