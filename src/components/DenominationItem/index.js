// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denom, subNum} = props
  const {value, id} = denom

  const onSub = () => {
    subNum(id)
  }

  return (
    <li className="lists">
      <button className="button" type="button" value={value} onClick={onSub}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
