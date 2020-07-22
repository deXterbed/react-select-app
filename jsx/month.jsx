import React from "react";
import PropTypes from "prop-types";
import Week from "./week";
import * as utils from "./date_utils";

export default class Month extends React.Component {
  handleDayClick(day, event) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event, this.props.orderInDisplay);
    }
  }

  onMonthClick(e, m) {
    this.handleDayClick(
      utils.getStartOfMonth(utils.setMonth(this.props.day, m)),
      e
    )
  }

  renderMonths = () => {
    const {
      locale
    } = this.props;
    const months = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    ]
    
    return months.map((month, i) => (
      <div className="react-datepicker__month-wrapper" key={i}>
        {month.map((m, j) => (
          <div
            key={j}
            onClick={ev => {
              this.onMonthClick(ev, m);
            }}
          >
            {utils.getMonthInLocale(m, locale)}
          </div>
        ))}
      </div>
    ));
  };

  render() {
    return (
      <div>
        {showMonthYearPicker
          ? this.renderMonths()
          : showQuarterYearPicker
            ? this.renderQuarters()
            : this.renderWeeks()}
      </div>
    )
  }
}
