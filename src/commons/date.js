export const changeDateFormat = value => {
    
    value =
        value.toLocaleDateString("us-US", { year: 'numeric' })+ "-"+ 
        value.toLocaleDateString("us-US", { month: '2-digit' })+ "-" + 
        value.toLocaleDateString("us-US", { day: '2-digit' });
    
    return value;
};
