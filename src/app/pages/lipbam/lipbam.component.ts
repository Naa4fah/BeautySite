import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lipbam',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lipbam.component.html',
  styleUrl: './lipbam.component.css'
})
export class LipbamComponent {
  lipbam=[
    {
      id:1,
      Title:"Nivea-Lipbam",
      image:"../../../assets/lipbam1.jfif",
      price:"$650",
      description:"Vanilla"
    },
    {
      id:2,
      Title:"Nivea-Lipbam",
      image:"../../../assets/lipbam2.jfif",
      price:"$750",
      description:"Stawberry"
    },
    {
      id:3,
      Title:"Nivea-Lipbam",
      image:"../../../assets/lipbam3.jfif",
      price:"$550",
      description:"orange"
    },
  ]

}
