import React, { Component } from "react";
import Card from "./Card";
import Friends from "../friends.json";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      score: 1,
      friends: Friends,
      pickedFriends: []
    };
    console.log(this.state.friends);
  }

  shuffleCards = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  handleClick = e => {
    let id = e.target.id;
    // console.log(id);
    let clicked = false;
    this.state.pickedFriends.forEach(friend => {
      if (friend.id == id) {
        clicked = true;
      }
    });

    if (clicked) {
      // console.log("hit clicked if");
      this.gameOver();
    } else {
      this.state.friends.forEach(friend => {
        if (friend.id == id) {
          this.state.pickedFriends.push(friend);
          // console.log(this.state.pickedFriends);
          this.updateScore();
        }
      });
    }
    this.setState({ Friends: this.shuffleCards(this.state.friends) });
    console.log("Shuffling the Superfriends");
    console.log(this.state.pickedFriends);
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
    this.props.updateScore(this.state.score);
  };

  gameOver = () => {
    console.log("Game Over");
    this.props.updateMaxScore(this.state.score-1);
    this.setState({ score: 1, pickedFriends: [] });
    this.props.updateScore(0);
  };

  render(){
    // console.log(Friends);
    // Friends.map(friend => console.log(friend));
    return(
      <div className="container" id="card-container">
        <div className="row">
          {Friends.map(friend => <Card src={friend.image} key={friend.id} id={friend.id} alt={friend.name} gameOver={this.gameOver} handleClick={this.handleClick} score={this.state.score} />)}
        </div>
      </div>
    )
  }
}

export default Main;
