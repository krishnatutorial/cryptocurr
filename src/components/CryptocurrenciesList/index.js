// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div>
        {this.renderCryptocurrenciesHeader()}
        <ul>
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/Cryptocurrency-bg.png"
          alt="Cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
