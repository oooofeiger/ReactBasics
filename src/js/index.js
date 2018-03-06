import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentIndexBody from './components/indexBody';
import 'antd/dist/antd.css';

export default class Index extends React.Component{
	render(){
		return (
			<div>
				<ComponentHeader/>
				<ComponentIndexBody userId='123erte' userName='Feiger'/>
				<p>{this.props.children}</p>
				<ComponentFooter/>
			</div>
		)
	}
}

// ReactDOM.render(<Index/>,document.getElementById('example'));
