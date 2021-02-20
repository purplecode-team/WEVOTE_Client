// import React from 'react';
//
// const App = () => (
//   <div>
//     <p>Project is ready to start</p>
//   </div>
// );
//
//

import React, { Component } from 'react';

class App extends Component {
  // state 초기값 설정
  // eslint-disable-next-line react/state-in-constructor
  state = {greetings: []}

  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    fetch('http://localhost:8001/api')
      .then((res) => res.json())
      // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
      .then((greetings) => this.setState({ greetings }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.state.greetings.map((greeting) => (
          <div key = { greeting.id }> {greeting.username} </div>
        ))}
      </div>
    );
  }
}

export default App;

