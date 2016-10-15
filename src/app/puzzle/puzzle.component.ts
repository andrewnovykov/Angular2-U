import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

	switch1Number: number;
	switch2Number: number;
	switch3Number: number;
	switch4Number: number;

  // constructor(switch1Number,switch2Number,switch3Number,switch4Number) { 
  // 	this.switch1Number = switch1Number;
  // 	this.switch2Number = switch2Number;
  // 	this.switch3Number = switch3Number;
  // 	this.switch4Number = switch4Number;
  // }

  ngOnInit() {

  	this.switch1Number = Math.round(Math.random());
  	this.switch2Number = Math.round(Math.random());
  	this.switch3Number = Math.round(Math.random());
  	this.switch4Number = Math.round(Math.random());

  	console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number)

  }



}
