import React from 'react';

export default (WrapComponent) => {
  class NewComponent extends React.Component{
    log(){
      console.log('abc');
    }

    render(){
      return <WrapComponent log = {this.log.bind(this)}/>
    }
  }
  return NewComponent;
}
