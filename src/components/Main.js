import React from 'react';
import '../index.scss';
import Select from './select/index'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            target: '1',
            barsList: [],   // barsList Array
            btnsList: [],   // btnsList Array
            limit: null
        }
    }

    componentDidMount() {
        fetch('http://pb-api.herokuapp.com/bars')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const bars = data.bars;
            const buttons = data.buttons;
            const limit = data.limit;

            this.setState({
                barsList: bars,
                btnsList: buttons,
                limit
            })
        });
    }

    handleChange(val) {
        this.setState({
            target: val
        })
    }

    progressClass(target) {
        if (this.state.barsList[target - 1] >= this.state.limit) {
            return 'progress-bar progress-bar-danger progress-bar-striped ' + ((target == this.state.target) ? 'active' : '');
        } else {
            return 'progress-bar progress-bar-info progress-bar-striped ' + ((target == this.state.target) ? 'active' : '');
        }

    }

    buttonClass(btnVal) {
        return (btnVal > 0) ? 'btn btn-danger' : 'btn btn-primary';
    }

    handleBtnClick(btn) {
        let currentBar = this.state.target;
        // console.log(this.state.barsList)
        // console.log(this.state.barsList[currentBar - 1])

        // update barsList Array
        let barsList = this.state.barsList;
        const newBarsVal = (barsList[currentBar - 1] + btn) <= 0 ? 0 : (barsList[currentBar - 1] + btn);

        barsList.splice(currentBar - 1, 1, newBarsVal)
        //console.log(barsList)
        this.setState({
            barsList: barsList
        })
    }

    render() {

        // bar info
        const barHTML = this.state.barsList.map((bar, i) => {

            let barWidth = {
                width: (bar >= 100) ? 100 + '%' : bar + '%',
                color: '#000',
                fontSize: '28px',
                lineHeight: '52px'
            }

            return (
                <div key={i} className="row bar">
                    <div className="col-12">
                        <div className="progress">
                            <div
                                className={this.progressClass(i + 1)}
                                role="progressbar"
                                style={barWidth}
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {bar}%
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        // button info
        const btnHTML = this.state.btnsList.map((btn, i) => {
            return (
                <div key={i} className="button">
                    <button className={this.buttonClass(btn)} onClick={() => this.handleBtnClick(btn)}>
                        {btn > 0 ? '+' + btn : btn}
                    </button>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row title">
                    <div className="col-12 text-center">
                        <h1>Progress Bars Demo</h1>
                    </div>
                </div>

                { barHTML }

                <div className="row user-control">
                    <div className="buttons">
                        <Select slctVal={this.handleChange.bind(this)} />
                        { btnHTML }
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
