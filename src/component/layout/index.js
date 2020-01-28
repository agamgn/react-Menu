import React from "react";
import NavTop from "../nav-top/index";
import NavSide from "../nav-side/index";
import "./themes.css"

class Layout extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;