const formatLongNumber = (num) => {
    // 1991 => 1,991 
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const formatDigits = (num) => {
    // 4 => 4.0
    return num.toFixed(1);
}

export {
    formatLongNumber,
    formatDigits
}