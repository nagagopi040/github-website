import React, { Component } from 'react';
import "./../styles/drop-down.css";

export class DropDown extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            selectedValue: "All"
        }
    }

    onClick = () => {
        this.setState( prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    onItemClick = (item) => {
        this.setState({selectedValue: item.title})
        this.onClick();
        this.props.onItemClick(item.value);
    }

    render() {
        const { isOpen, selectedValue } = this.state;
        const { label , items} = this.props;
        return (
            <div className="dropdown">
                <button onClick={this.onClick} className="dropbtn">{label}: {selectedValue} &#9660;</button>
                <div className={`dropdown-content${isOpen ? " show" : ""}`}>
                    <p>Select {label}</p>
                    {
                        items.length > 0 && items.map(item => <a key={item.value} href="javscript:void(0)" onClick={() => this.onItemClick(item)}>{item.title}</a>)
                    }
                </div>
            </div>
        )
    }
}
