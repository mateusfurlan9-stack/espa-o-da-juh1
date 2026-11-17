export function durationLabel(minutes) {
  const hours = Math.floor(minutes / 60), remainder = minutes % 60;
  return hours ? `${hours}h${remainder ? String(remainder).padStart(2,'0') : ''}` : `${remainder} min`;
}
export function endTime(start, minutes) {
  const [hour, minute] = start.split(':').map(Number);
  const end = hour * 60 + minute + minutes;
  return `${String(Math.floor((end % 1440) / 60)).padStart(2,'0')}:${String(end % 60).padStart(2,'0')}${end>=1440?' (+'+Math.floor(end/1440)+' dia'+(end>=2880?'s':'')+')':''}`;
}

// Show the fixed business day even when the earliest slots have passed.
export function dailyStarts(duration) {
  const times=[];
  for(let hour=9;hour<=17;hour++){
    for(const minute of [0,20,30,50]){
      if(hour===17&&minute>0)break;
      times.push(`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`);
    }
  }
  return times;
}
