import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card_list/card_list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      term: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      term: e.target.value.toLowerCase(),
    });
  }

  componentDidMount() {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
      .then((res) => res.json())
      .then((data) => this.setState({ people: data.data }));
  }

  render() {
    const { people, term } = this.state;
    const filteredPeople = people.filter(
      (p) =>
        p.firstname.toLowerCase().includes(term) ||
        p.lastname.toLowerCase().includes(term)
    );
    return (
      <div className="App">
        <Search handleChange={this.handleChange} />
        <CardList people={filteredPeople} />
        <pre>{JSON.stringify(people, true, 2)}</pre>
      </div>
    );
  }
}

export default App;
