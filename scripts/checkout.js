import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { car } from "../data/car.js"; 

console.log(car);
car[0].displayInfo();
car[1].displayInfo();

car[0].go();
car[0].go();
car[1].brake();
car[1].brake();

car[0].displayInfo();
car[1].displayInfo();

car[0].openTrunk();
car[0].go();
car[0].go();
car[0].displayInfo();

car[0].closeTrunk();
car[0].go();
car[0].go();
car[0].displayInfo();

car[2].openTrunk();
car[2].go();

car[2].displayInfo();

renderOrderSummary();
renderPaymentSummary();