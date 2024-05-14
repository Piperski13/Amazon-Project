import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; //dayjs library

export function renderDateOrder(orderDate){
  let dataString = dayjs(orderDate);
  const dataStringFormat = dataString.format(
    'MMMM D'
  );
return dataStringFormat;
};




