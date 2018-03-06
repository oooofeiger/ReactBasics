import React from 'react';

export default class Componentlist extends React.Component{
  render(){
    return(
      <div>
        <h1>这里是列表页 Id:{this.props.params.id}</h1>
      </div>
    )
  }
}
