import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentIndexBody from './components/indexBody';
import 'antd/dist/antd.css';

class Index extends React.Component{
	render(){
		return (
			<div>
				<ComponentHeader/>
				<ComponentIndexBody userId='123erte' userName='Feiger'/>
				<ComponentFooter/>
			</div>
		)
	}
}

// ReactDOM.render(<Index/>,document.getElementById('example'));
