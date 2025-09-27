import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

// For this function if the order is placed at the same day and year then the order will then be appended
// to the array with the same day and year
export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function orderDeliveryDate (date) {
    date = dayjs(date);
    const day = date.format('dddd');
    if(day === 'Saturday'){
      date = date.add(2, 'days');
    }
    else if (day === 'Sunday'){
     date = date.add(1, 'days');

    }

  
    const dateString = date.format(
      'MMM DD, YYYY'
    );
    return dateString;
}
