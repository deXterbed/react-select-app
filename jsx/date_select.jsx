import React from 'react'

import {
  newDate,
  setMonth,
  getMonth,
  getDate,
  setDate,
  setYear,
  getYear,
} from "./date_utils"

import MonthSelect from './month_select.jsx'
import YearSelect from './year_select.jsx'
import DaySelect from './day_select.jsx'

class DateSelect extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = this.refs.containerRef

    this.state = {
      date: this.getDateInView(),
      selectingDate: null,
      monthContainer: null
    }
  }

  componentDidMount() {
    this.props.onChange(this.state.date)
  }

  changeMonth(month) {
    this.setState(
      ({ date }) => ({
        date: setMonth(date, month)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  changeYear(year) {
    this.setState(
      ({ date }) => ({
        date: setYear(date, year)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  changeDate(day) {
    this.setState(
      ({ date }) => ({
        date: setDate(date, day)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  getDateInView() {
    const { preSelection, selected, openToDate } = this.props
    const current = newDate();
    const initialDate = openToDate || selected || preSelection;
    if (initialDate) {
      return initialDate;
    }
    return current
  }

  renderMonthSelect() {
    return (
      <MonthSelect
        locale={this.props.locale}
        onChange={this.changeMonth.bind(this)}
        month={getMonth(this.state.date)}
      />
    )
  }

  renderYearSelect() {
    return (
      <YearSelect
        locale={this.props.locale}
        onChange={this.changeYear.bind(this)}
        year={getYear(this.state.date)}
      />
    )
  }

  renderDaySelect() {
    return (
      <DaySelect
        locale={this.props.locale}
        onChange={this.changeDate.bind(this)}
        date={this.state.date}
        day={getDate(this.state.date)}
      />
    )
  }

  render() {
    return (
      <div ref={this.containerRef}>
        {this.renderDaySelect()}
        {this.renderMonthSelect()}
        {this.renderYearSelect()}
      </div>
    )
  }
}

export default DateSelect