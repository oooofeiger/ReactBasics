import React from 'react';
import ReactDOM from 'react-dom';
import FooterCss from '../../css/footer.css'

class ComponentFooter extends React.Component{
  render(){
    return (
      <footer className={FooterCss.miniFooter}>
        <h1>这里是页脚</h1>
      </footer>
    )
  }
}

export default ComponentFooter;
