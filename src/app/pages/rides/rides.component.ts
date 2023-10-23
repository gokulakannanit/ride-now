import { Component } from '@angular/core';


interface rideDetail {
  id: Number,
  date: String,
  cabType: 'Sedan' | 'Auto' | 'Mini' | 'Any' | 'Suv',
  crNo: String,
  amount: Number,
}

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  rideData: rideDetail[] = [
    {
      id: 1,
      date: "Fri, Jun 30, 06:45 AM",
      cabType: "Sedan",
      crNo: "CRN 747057",
      amount: 122
    },
    {
      id: 2,
      date: "Fri, Jun 30, 06:45 AM",
      cabType: "Auto",
      crNo: "CRN 747057",
      amount: 122
    },
    {
      id: 3,
      date: "Fri, Jun 30, 06:45 AM",
      cabType: "Mini",
      crNo: "CRN 747057",
      amount: 122
    }
  ]
}
