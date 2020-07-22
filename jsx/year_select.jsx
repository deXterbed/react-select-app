import React from 'react'
import { getYear } from "./date_utils"

class YearSelect extends React.Component {
  onChange(year) {
    if (year === this.props.year) return
    this.props.onChange(year)
  }

  renderSelectOptions() {
    const minYear = this.props.minDate ? getYear(this.props.minDate) : 1900;
    const maxYear = this.props.maxDate ? getYear(this.props.maxDate) : 2100;

    const options = [];
    for (let i = minYear; i <= maxYear; i++) {
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
        value={this.props.year}
        onChange={this.onSelectChange.bind(this)}
      >
        {this.renderSelectOptions()}
      </select>
    )
  }
}

export default YearSelect