import React, { Component } from "react";
 
class OtherCraftItems extends Component {

    constructor(props){
        super(props);
this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
      this.props.delete(key);
    }

  createTasks(item) {
    return <li key={item.key}>{item.text}<span onClick={() => this.delete(item.key)}><i className="far fa-times-circle"></i></span></li>
  }
 
  render() {
    const otherCraftsEntries = this.props.entries;
    const listItems = otherCraftsEntries.map(this.createTasks);
 
    return (
      <ul className="craftList">
          {listItems} 
      </ul>
    );
  }
};
 
export default OtherCraftItems;