import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cursor: true,
            stringHolder: "",
            stringPos: 0,
            charNbsp: false,
            timerLatency: 200,
        }
    }

    changeCursor() {
        this.setState({
            cursor: !this.state.cursor
        })
    }

    updateTitle() {
        if (this.props.titleText !== this.state.stringHolder) {
            if (this.props.titleText.charAt(this.state.stringPos) === " ") {
                this.setState({ charNbsp: true, });
            } else {
                this.setState({ charNbsp: false, });
            }
            this.setState({ 
                stringHolder: this.state.stringHolder + this.props.titleText.charAt(this.state.stringPos),
                stringPos: this.state.stringPos + 1,
            });
        }
    }

    componentDidMount() {
        this.cursorTimerID = setInterval(
            () => this.changeCursor(), 500
        );
        this.stringTimerID = setInterval(
            () => this.updateTitle(), 125
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.cursorTimerID);
        clearInterval(this.stringTimerID);
    }

    render() {
        return (
            <div className="container">
                <div className={`title-content ${ this.props.home ? "flex-center" : "" }`}>
                    <div className={`row ${ this.props.home ? "title-home-margin" : "title-margin" }`}>
                        <h1 className={ `title-text ${ this.props.home ? "title-home" : "" }` }> 
                            { this.state.stringHolder }
                        </h1>
                        { this.state.charNbsp ? <div><span>&nbsp;&nbsp;</span><span>&nbsp;</span></div> : ''}
                        <div className={`cursor ${ this.state.cursor ? "cursor-line" : "cursor-line-transparent" }`} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Title;