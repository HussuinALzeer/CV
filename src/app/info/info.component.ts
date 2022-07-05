import { Component, OnInit } from '@angular/core';
import {AboutService } from '../about/about.service';

interface personalty{
  title:string,
  text:string,
  icon:string,
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  pero!: personalty[];

  constructor(private sv:AboutService) { }


  ngOnInit(): void {
    this.sv.getInfoList().subscribe(res  =>{
      this.pero = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as unknown as personalty
      })
    })
  }

}
