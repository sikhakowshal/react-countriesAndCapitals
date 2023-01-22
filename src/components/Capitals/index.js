import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  updateActiveId = event => {
    const currentId = event.target.value
    this.setState({activeId: currentId})
  }

  render() {
    const {activeId} = this.state
    const countryDetails = countryAndCapitalsList.filter(
      eachObject => eachObject.id === activeId,
    )

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="input-container">
            <select className="select-input" onChange={this.updateActiveId}>
              {countryAndCapitalsList.map(eachObject => (
                <option
                  value={eachObject.id}
                  className="option"
                  key={eachObject.id}
                >
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description"> is capital of which country?</p>
          </div>
          <h1 className="country">{countryDetails[0].country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
