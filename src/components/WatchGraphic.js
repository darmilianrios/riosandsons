import * as React from "react"
import "../styles/watchgraphic.css"
const WatchGraphic = () => {
  // Function to format the current date as "DD MMM"
  const formatDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date
      .toLocaleString("default", { month: "short" })
      .toUpperCase()
    return `${day} ${month}`
  }

  const getCurrentDayIndex = () => {
    const date = new Date()
    return date.getDay()
  }

  const dayIndex = getCurrentDayIndex()
  const days = ["S", "M", "T", "W", "T", "F", "S"]

  const getDayOfWeek = () => {
    const date = new Date()
    const dayIndex = date.getDay()
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    return days[dayIndex]
  }
  const calculateRotation = () => {
    const date = new Date()
    const dayIndex = date.getDay() // 0 for Sunday, 1 for Monday, etc.
    return -101 + dayIndex * 27 // -101 degrees for Sunday, then +27 for every additional day
  }

  const rotationStyle = {
    transform: `rotate(${calculateRotation()}deg)`,
  }

  return (
    <div className="relative">
      <div className="watch-strap">
        <div className="strap-circle"></div>
        <div className="strap"></div>
        <div className="watch-strap-holder left-up"></div>
        <div className="watch-strap-holder left-bottom"></div>
        <div className="watch-strap-holder right-up"></div>
        <div className="watch-strap-holder right-bottom"></div>
        <div className="watch-lace">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <div className="watch-case">
        <div className="reflection"></div>
        <div className="reflection bottom"></div>
        <div className="watch-center">
          <div className="watch-points">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="watch-tips">
            <span className="hours"></span>
            <span className="minutes"></span>
            <span className="seconds"></span>
          </div>
          <div className="watch-date">{formatDate()}</div>
          <div className="watch-alert">
            Master <br />
            <strong>Watchmaker</strong>
          </div>
          <div className="watch-week">
            <span style={rotationStyle} className="weekday-arrow "></span>
            <ul>
              {days.map((day, index) => (
                <div
                  key={index}
                  style={{
                    color: index === dayIndex ? "#ff5456" : " #BBB ",
                  }}
                >
                  {day}
                </div>
              ))}
            </ul>
          </div>
          <div className="watch-day">
            <div className="sun">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="watch-week days">
            <span className="week-arrow"></span>
            <ul>
              <div>3</div>
              <div>6</div>
              <div>9</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchGraphic
