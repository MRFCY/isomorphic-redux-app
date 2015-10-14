import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props){
	super(props);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item">
		    <p>This is an example of a website built with redux and react</p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home</Link>
		    <Link to="/counter" className="sidebar-nav-item" activeClassName="active">Counter</Link>
		    <Link to="/random" className="sidebar-nav-item" activeClassName="active">Random</Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About</Link>
		    <span className="sidebar-nav-item">Currently v1.0.0</span>
		  </nav>

		  <div className="sidebar-item sidebar-footer">
		    <p>
				<a href="https://github.com/caljrimmer/simple-redux-boiler">Visit GitHub Repo</a> 
		    </p>
		  </div>

		</div>
    );
  }
}

export default Sidebar;