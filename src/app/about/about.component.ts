import { Component, OnInit } from '@angular/core';
import { info, skills } from './about.model';
import { AboutService } from './about.service';
import { exper_text } from './exper_text.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private aboutS:AboutService) { }
  Education!: info[];
  exper!: info[];

  skills!: info[];

  exper_text!:exper_text [];

  ngOnInit(): void {
    this.aboutS.getEductionList().subscribe(res => {
      this.Education = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {} 
        } as unknown as info
      })

    });
    /// end here

    this.aboutS.getexpeList().subscribe(res => {
      this.exper = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as unknown as info
      })

    });

  /// end here
    
  this.aboutS.getSkillsList().subscribe(res => {
    this.skills = res.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as {}
      } as unknown as info
    })

  });

    
  this.aboutS.getSkillsList().subscribe(res => {
    this.exper_text = res.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as {}
      } as unknown as exper_text
    })

  });

/// end here
    
    console.log(this.exper_text);
    
  }

}
