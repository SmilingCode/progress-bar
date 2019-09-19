import React from 'react';
import './select.css';

class Select extends React.Component {
    // get selected value
    handleSlct(e) {
        const {name, value} = e.target;

        this.props.slctVal(value);
    }

    render() {
        const optionHtml = this.props.barsList.map((bar, i) => {
            return (
                <option key={i} value={i + 1}>#progress{i+1}</option>
            );
        })
        return (
            <div className="select">
                <form>
                    <select name="slct" id="slct" onChange={(e) => this.handleSlct(e)}>
                        { optionHtml }
                    </select>
                </form>
            </div>
        )
    }
}

export default Select;
