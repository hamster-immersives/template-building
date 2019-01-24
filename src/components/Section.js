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
   ]
  }


  render() {


    return (
      

        <div className="wrapper row3">
        <main className="hoc container clear"> 
          <div className="sectiontitle">
          <form>
            <input />
            <input />
            <input />
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
