// Práticas Do Livro Get Started

//  Practicing Comparisons

// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";


function stringTimeToMinutes(time){
let timeHours = time.slice(0,2).replace(":","")
// console.log(`Hora do time: ${timeHours}`)
let timeMinutesHour = timeHours * 60
// console.log(`Hora do time em minutos: ${timeMinutesHour}`)
let timeMinutes = Number(time.slice(-2))
// console.log(`Minutos do time: ${timeMinutes}`)
let timeInMinutes = timeMinutesHour + timeMinutes
// console.log(`dayStart em minutos: ${dayStartInMinutes}`)
return timeInMinutes
}

function scheduleMeeting(startTime,durationMinutes) {

    startTimeInMinutes = stringTimeToMinutes(startTime)
    let endTimeInMinutes = startTimeInMinutes + durationMinutes

    dayStartInMinutes = stringTimeToMinutes(dayStart)
    dayEndInMinutes = stringTimeToMinutes(dayEnd)

    if ((startTimeInMinutes < dayStartInMinutes) || (endTimeInMinutes > dayEndInMinutes)){
        return false
    }
    return true
}


console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false
