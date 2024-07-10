import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [],
  templateUrl: './addcart.component.html',
  styleUrl: './addcart.component.css'
})
export class AddcartComponent {
  constructor(private routeId:ActivatedRoute,private api:ApiService){}
  data:any=[]
  ngOnInit(){
    this.api.getProducts().subscribe((res:any)=>{
      let id=this.routeId.snapshot.paramMap.get('id')
      let response=res
      let lip=response.filter((e:any)=>e.id==id)
      this.data=lip[0]
    })
  }
  

}
