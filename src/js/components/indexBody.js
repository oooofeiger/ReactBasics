import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MixinLog from './mixin';
import BodyChild from './bodyChild';
import {Input} from 'antd';

class ComponentIndexBody extends React.Component{
  constructor(){
    super();
    this.state = {username : 'Feiger',age:20};
  }

  changeUserInfo(age){
    this.setState({age:age});
    this.props.log();
    this.refs.mySubmit.style.color='red';
  };

  handleChildValueChange(event){
    this.setState({age:event.target.value})
  }

  render(){
    setTimeout(()=>{
      this.setState({username : 'Parry'});
    },2000);
    // var userName = 'Perry';
    // var boolInput = true;
    // var text = 'IMOOC\u0020LESSON';//特殊字符可以使用unicode编码

    return (
      <div>
        <h1>这里是主体</h1>
        {/*
          <p>{userName == '' ? '用户未登录' : '用户名:'+userName}</p>
          <input type='button' value={userName} disabled={boolInput}/>;
          <p>{text}</p>
        */}

        <p>{this.state.username} {this.props.userId} {this.props.userName}</p>
        <p>age:{this.state.age}</p>
        <Input placeholder='Basic usage'/>
        <input ref='mySubmit'  value="提交" type='button' onClick={this.changeUserInfo.bind(this,99)}/>
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}
ComponentIndexBody.propTypes = {
  userId : PropTypes.number
}
ComponentIndexBody = MixinLog(ComponentIndexBody);
export default ComponentIndexBody;
