import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

export function formatTime (deliveryOption) {
  const today = dayjs();
    let deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const day = deliveryDate.format('dddd');
    if(day === 'Saturday'){
      deliveryDate = deliveryDate.add(2, 'days');
    }
    else if (day === 'Sunday'){
     deliveryDate = deliveryDate.add(1, 'days');

    }

  
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );
    return dateString;
}

export function formatOrderTime(date){
  const orderDate = dayjs(date).format('MMM DD, YYYY');
  return orderDate;
}