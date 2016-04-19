import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
      const { location } = this.props;
      const sharedClass = location.pathname === "/" ? "aui-nav-selected" : "";
      const mineClass = location.pathname.match(/^\/mine/) ? "aui-nav-selected" : "";
      const settingsClass = location.pathname.match(/^\/settings/) ? "aui-nav-selected" : "";

    return (
        <nav class="aui-header">
            <ul class="aui-nav">
              <li class={sharedClass}><IndexLink to="/">Shared</IndexLink></li>
              <li class={mineClass}><Link to="mine">Mine</Link></li>
              <li class={settingsClass}><Link to="settings">Setting</Link></li>
            </ul>
        </nav>
    );
  }
}
