import React from 'react'
import DatePicker from './date_select.jsx'

class Content extends React.Component {
  handleChange(date) {
    console.log(date)
  }
  render() {
    return (
      <DatePicker onChange={this.handleChange.bind(this)} />
    )
  }
}

export default Content