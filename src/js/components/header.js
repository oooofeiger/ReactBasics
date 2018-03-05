import React from 'react';
import ReactDOM from 'react-dom';

class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader:false
    }
  }

  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    })
  }
  render(){
  const headerStyle = {
    header:{
      backgroundColor:'#333333',
      color:'#fff',
      paddingTop:(this.state.miniHeader)?'3px' : '15px',
      paddingBottom:(this.state.miniHeader)?'3px' : '15px'
    }
  }

    return (
      <header onClick={this.switchHeader.bind(this)} style={headerStyle.header} className='smallFontSize'>
        <h1>这里是头部</h1>
      </header>
    )
  }
}

export default ComponentHeader;
