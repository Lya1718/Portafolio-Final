import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  // @Output() onAddChanges: EventEmitter<Portfolio> = new EventEmitter();
text: string = "";
title: string = "";

constructor() {}
  ngOnInit(): void {
  }

  // onSubmit(){
  //   if(this.text == "" && this.title == ""){
  //     alert("Please write something")
  //   }
  //   else{
  //   const changes = {
  //     text: this.text,
  //     title: this.title
  //   }
  //   this.onAddChanges.emit(changes)
  //  }
  // }

}
