import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './face.component.html',
  styleUrl: './face.component.css'
})
export class FaceComponent {
  face=[
    {
      id:1,
      Title:"Face-combo",
      image:"../../../assets/face1.jfif",
      price:"$650",
      description:"whitish"
    },
    {
      id:2,
      Title:"Face-combo",
      image:"../../../assets/face2.jpg",
      price:"$750",
      description:"browish"
    },
    
  ]

}
