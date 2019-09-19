import React from 'react';
import './select.css';

class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slct: '1'
        }

        this.handleSlct = this.handleSlct.bind(this);
    }

    handleSlct(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })

        this.props.slctVal(value);
    }

    render() {
        return (
            <div className="select">
                <form>
                    <select name="slct" id="slct" onChange={this.handleSlct}>
                        <option value="1">#progress1</option>
                        <option value="2">#progress2</option>
                        <option value="3">#progress3</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Select;
