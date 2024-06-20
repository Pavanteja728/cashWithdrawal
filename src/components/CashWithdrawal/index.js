// Write your code here

import {Component} from 'react'
import './index.css'

import DemominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    number: 2000,
  }

  subNum = id => {
    const {number} = this.state
    let num
    if (number > 0) {
      if (id === 1) {
        num = number - 50
      } else if (id === 2) {
        num = number - 100
      } else if (id === 3) {
        num = number - 200
      } else {
        num = number - 500
      }
    } else {
      num = 0
    }

    this.setState({
      number: num,
    })
  }

  render() {
    const {denominationsList} = this.props
    const {number} = this.state
    return (
      <div className="bgCont">
        <div className="cardCont">
          <div className="start-details">
            <button className="button1" type="button">
              S
            </button>
            <h1 className="head">Sarah Williams</h1>
          </div>
          <div className="space">
            <p className="head2">Your Balance</p>
            <div>
              <p className="head3">{number}</p>
              <p className="para">In Rupess</p>
            </div>
          </div>
          <p className="head4">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>

          <ul className="unis">
            {denominationsList.map(each => (
              <DemominationItem
                denom={each}
                key={each.id}
                subNum={this.subNum}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
