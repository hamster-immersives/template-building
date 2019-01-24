import React, { Component } from 'react'
import SectionView from './view/SectionView';
import uuidv4 from 'uuid/v4';

export default class Section extends Component {

  state = {
   userInfo: [
    {
      name: "Hamster overlord",
      title: "Chief Executive Officer",
      summary: "Est sed tellus nunc hendrerit adipiscing nulla nunc id elit etiam tempus lectus vel posuere congue nunc quam varius lectus.",
      id: uuidv4()
    }
   ],
   name: "",
   title: "",
   summary: ""
  }

  handleInput = (event) => {
    console.log(`name: ${event.target.name} value: ${event.target.value}`)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let newUser = {
      name: this.state.name,
      title: this.state.title,
      summary: this.state.summary,
      id: uuidv4()
    }

    let currentUserList = Object.assign([], this.state.userInfo);
    
    currentUserList.push(newUser);

    this.setState({
      userInfo: currentUserList
    })

  }

  render() {


    return (
      

        <div className="wrapper row3">
        <main className="hoc container clear"> 
          <div className="sectiontitle">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name="name" 
              onChange={this.handleInput}
              />
            <input 
              type="text" 
              name="title"
              onChange={this.handleInput}
              />
            <input 
              type="text" 
              name="summary"
              onChange={this.handleInput}
              />
            <button>Submit</button>
        </form>
          </div>
          <div className="group excerpts">
            {
              this.state.userInfo.map((user) => {
                return (
                  <SectionView 
                    name={user.name}
                    title={user.title}
                    summary={user.summary}
                    key={user.id}
                  />
                )
              })
            }
          </div>
          <div className="clear" />
        </main>
      </div>

    )
  }
}
