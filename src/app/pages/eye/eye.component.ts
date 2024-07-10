import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eye',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eye.component.html',
  styleUrl: './eye.component.css'
})
export class EyeComponent {
  eye=[
    {
      id:1,
      Title:"EYE COMBO",
      image:"../../../assets/eye1.jpg",
      price:"$650",
      description:"black"
    },
    {
      id:2,
      Title:"EYE COMBO",
      image:"../../../assets/eye2.jfif",
      price:"$750",
      description:"brown"
    },
    
  ]

}
