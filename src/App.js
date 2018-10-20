import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    score: 0,
    maxScore: 0
  };

  updateScore = newScore => {
    this.setState({ score: newScore });
  };

  updateMaxScore = newScore => {
    if (newScore > this.state.maxScore) {
      this.setState({ maxScore: newScore });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} maxScore={this.state.maxScore} />
        <Header />
        <Main
          updateScore={this.updateScore}
          updateMaxScore={this.updateMaxScore}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
