import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lips',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lips.component.html',
  styleUrl: './lips.component.css'
})
export class LipsComponent {
  lip=[
    {
      id:1,
      Title:"Maybelline-Lipstick",
      image:"https://dy6g3i6a1660s.cloudfront.net/g5b5ihJqXWL1c2dQTNAZfAJYAlg/orig.jpg",
      price:"$650",
      description:"Pink"
    },
    {
      id:2,
      Title:"Maybelline-Lipstick",
      image:"https://dy6g3i6a1660s.cloudfront.net/lJHRafSRzCPZwW9CnbJc_wJYAlg/orig.jpg",
      price:"$750",
      description:"Ruby pink"
    },
    {
      id:3,
      Title:"Maybelline-Lipstick",
      image:"https://dy6g3i6a1660s.cloudfront.net/VQ-xr5QKJz_hPNikXjOHmQJYAlg/orig.jpg",
      price:"$550",
      description:"Violet"
    },
    {
      id:4,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/violet.jfif",
      price:"$600",
      description:"Purple"
    },
    {
      id:5,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/orange.jfif",
      price:"$700",
      description:"Orange"
    },
    {
      id:3,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/red.jfif",
      price:"$500",
      description:"Red"
    },
    {
      id:4,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/blue.jfif",
      price:"$620",
      description:"Blue"
    },
    {
      id:5,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/brown.jfif",
      price:"$720",
      description:"Brown"

    },
    
    {
      id:6,
      Title:"Maybelline-Lipstick",
      image:"../../../assets/black.jfif",
      price:"$520",
      description:"Black"
    },
     ]
     


  

}
