export const keyExtractor =(item: any, index: { toString: () => any; }) => index.toString();

export function formatDate(date: string | number | Date){
    const _date = new Date(date);
    const options: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      };  
const formattedDate = _date.toLocaleDateString('en-US', options);
return formattedDate;
}