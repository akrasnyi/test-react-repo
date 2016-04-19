import React from "react";

import TitleChanger from "../TitleChanger";

export default class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Changable title",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render(){
        return (
            <div class="aui-page-panel-content">
                <TitleChanger changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        )
    }
}
