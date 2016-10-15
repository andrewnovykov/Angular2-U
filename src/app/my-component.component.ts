import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'my-component',
	template: `HI im <span [style.color]="inputElement.value === 'yes' ? 'red' : '' ">{{name}}</span>!
		<span [class.awesome]="inputElement.value === 'yes'">It is awesome!</span>
		<br />
		<br />
		<input type="text" #inputElement (keyup)="0" />
		<br />
		<br />
		<button [disabled]="inputElement.value !== 'yes'" >
			Only enabled if 'yes' was entered
		</button>
		<app-test></app-test>


	`,
	styleUrls: ['./my-component.component.css']


})

export class MyComponentComponent implements OnInit {

	name : string;

	ngOnInit() {
		this.name = 'MAX';
		
  	}

	
}