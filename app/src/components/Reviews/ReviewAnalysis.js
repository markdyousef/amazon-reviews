import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            analysis: null
        };
    }
    componentWillMount() {
        const { review: {reviewText, summary} } = this.props;
        console.log(this.props.review);
        this.analyze(reviewText, summary);
    }
    analyze = (reviewText, summary) => {
        this.setState({ analysis: reviewText })

    }
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    render() {
        const actions = [<FlatButton label="Cacel" onClick={this.handleClose}/>];
        const { review: {summary} } = this.props;
        return (
            <div>
                <RaisedButton label="Analysis" onClick={this.handleOpen}/>
                <Dialog
                    title={summary}
                    modal={false}
                    actions={actions}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {this.state.analysis}
                </Dialog>
            </div>
        );
    }
}