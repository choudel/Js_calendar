
 const isWeekEnd = day => {
    return day % 7===6 || day %7 ===0;
}
const getDayName = day =>{
    const date = new Date(2022,5, day);
const options ={
    weekday:"long"
}
 return new Intl.DateTimeFormat("en-US",options).format(date);
}
export {isWeekEnd, getDayName} 