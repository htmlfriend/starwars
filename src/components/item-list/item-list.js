import React, { Component } from "react";
import SwapiService from '../../services/swapi-service';
import "./item-list.css";
import Spinner from "../spiner/spiner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
    });
  }


  renderItem(arr) {
return arr.map(({name, id})=> {
  return (
    <li className="list-group-item" 
    key={id}
    onClick={() => this.props.onItemSelected(id)}
    >{name}</li>
  )
})
  }
  render() {
    const {peopleList} = this.state;
    if(!peopleList){
      return <Spinner />
    }
    const items = this.renderItem(peopleList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
