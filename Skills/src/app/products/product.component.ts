import { NgIf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-product',
  template: `<li *ngFor="let dept of departments ">
              {{dept}}</li>
              <div *ngFor="let user of users">
                  Name is:{{user.name}}
                  Email is:{{user.email}}
                  Phone no is:{{user.phone}}</div>`,
  styles: [`li {color:green; margin-top:10px}
div {color:red}`]
})

export class ProductComponent{
  departments=
  ["Mountain Bicycle","Road Bicycle","Hybrid Bicycle","Bicycle Pumps"];
  showDiv=true;
  users=
  [
    {name:'manpreet',email:'manna77@rediffmail.com',phone:'123123123'},
    {name:'abhay',email:'amanna77@rediffmail.com',phone:'111111111'},
    {name:'param',email:'pmanna77@rediffmail.com',phone:'222222222'}
   ]
}
