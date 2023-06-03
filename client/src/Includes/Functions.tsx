export const convertdate = (time:string) => {
    // convert unix timestamp
    const timestamp:string = (time);
    const ConvertTimeToNumber:number = Number(timestamp);
    const timeValue:number = ConvertTimeToNumber.valueOf();
    const date:Date = new Date(timeValue * 1000);
    // desired date convert here
    const setdateposted = date.toDateString()
    return setdateposted;
    // example output: Thu Jun 01 2023

}

export const convertNewlineChar = (text:string) => {
    // convert new line characters for text ex: --n 
    const regexText = text.replace(/--n/g, "\n");
    return regexText;

}