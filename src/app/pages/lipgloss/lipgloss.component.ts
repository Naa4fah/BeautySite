import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lipgloss',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lipgloss.component.html',
  styleUrl: './lipgloss.component.css'
})
export class LipglossComponent {
  lipgloss=[
    {
      id:1,
      Title:"Baby-Lipgloss",
      image:"../../../assets/lipgloss1.jfif",
      price:"$650",
      description:"Vanilla"
    },
    {
      id:2,
      Title:"Baby-Lipgloss",
      image:"../../../assets/lipgloss2.jfif",
      price:"$750",
      description:"Stawberry"
    },
    {
      id:3,
      Title:"Baby-Lipgloss",
      image:"../../../assets/lipgloss3.jfif",
      price:"$550",
      description:"orange"
    },
  ]


}
