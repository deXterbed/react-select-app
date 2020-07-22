import React from 'react'
import { getDate, getEndOfMonth } from "./date_utils"

class DaySelect extends React.Component {
  onChange(day) {
    if (day === this.props.day) return
    this.props.onChange(day)
  }

  renderSelectOptions() {
    const minDay = 1
    const maxDay = getDate(getEndOfMonth(this.props.date))

    const options = [];
    for (let i = minDay; i <= maxDay; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return options
  }

  onSelectChange(e) {
    this.onChange(e.target.value)
  }

  render() {
    return (
      <select
        value={this.props.day}
        onChange={this.onSelectChange.bind(this)}
      >
        {this.renderSelectOptions()}
      </select>
    )
  }
}

export default DaySelect