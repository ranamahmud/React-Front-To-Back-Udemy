import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/Search';
class App extends React.Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_CLIENT_ID)
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({ users: res.data, loading: false })

  }

  render() {

    return (
      <div className="App">
        <Navbar
        />
        <Search />
        <div className="container">

          <Users loading={this.state.loading} users={this.state.users} />

        </div>

      </div>
    );
  }

}

export default App;
