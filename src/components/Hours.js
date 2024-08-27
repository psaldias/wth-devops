import React from "react"

const Hours = () => {

    const schedule = [
        {day:'Monday', hour:'10 a.m. - 4 p.m.'},
        {day:'Tuesday', hour:'10 a.m. - 4 p.m.'},
        {day:'Wednesday', hour:'10 a.m. - 4 p.m.'},
        {day:'Thursday', hour:'10 a.m. - 4 p.m.'},
        {day:'Friday', hour:'10 a.m. - 4 p.m.'},
        {day:'Saturday', hour:'9 a.m. - 8 p.m.'},
        {day:'Sunday', hour:'9 a.m. - 8 p.m.'},
    ]

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long'})
    const todayHours = schedule.find(day => day.day === today)

    return (
        <>
            <div class="shelter-current-hour" >
                <h4>Today's Schedule</h4>
                <p>{todayHours.day} {todayHours.hour}</p>
            </div>
        </>
      )
}
export default Hours