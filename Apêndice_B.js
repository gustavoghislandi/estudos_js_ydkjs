// Práticas Do Livro Get Started

//  Practicing Comparisons

// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    let hour = startTime.slice(0,2).replace(":","")
    let minutesHour = hour * 60
    // console.log(`hora:${hour}`)
    // console.log(`Hora em minutos: ${minutesHour}`) // number

    let minutes = startTime.slice(-2)
    // console.log(`Minutos(string):${minutes}`) // string

    startTime = minutesHour + Number(minutes) // Transformando startTime em minutos (number)
    // console.log(`startTime em minutos: ${startTime}`) // number. Sem conversão seria string.
    let endTime = startTime + durationMinutes
    // console.log(endTime)

    let dayStartHours = dayStart.slice(0,2).replace(":","")
    // console.log(`Hora do dayStart: ${dayStartHours}`)
    let dayStartMinutesHour = dayStartHours * 60
    // console.log(`Hora do dayStart em minutos: ${dayStartMinutesHour}`)
    let dayStartMinutes = Number(dayStart.slice(-2))
    // console.log(`Minutos do dayStart: ${dayStartMinutes}`)
    let dayStartInMinutes = dayStartMinutesHour + dayStartMinutes
    // console.log(`dayStart em minutos: ${dayStartInMinutes}`)

    let dayEndHours = dayEnd.slice(0,2).replace(":","")
    // console.log(`Hora do dayEnd: ${dayEndHours}`)
    let dayEndMinutesHour = dayEndHours * 60
    // console.log(`Hora do dayEnd em minutos: ${dayEndMinutesHour}`)
    let dayEndMinutes = Number(dayEnd.slice(-2))
    // console.log(`Minutos do dayEnd: ${dayEndMinutes}`)
    let dayEndInMinutes = dayEndMinutesHour + dayEndMinutes
    // console.log(`dayEnd em minutos: ${dayEndInMinutes}`)

    if ((startTime < dayStartInMinutes) || (endTime > dayEndInMinutes)){
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
