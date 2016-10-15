import { Component } from '@angular/core';


@Component({
	selector: 'my-component',
	template: `HI im {{name}}! <span [class.awesome]="inputElement.value === 'yes'">It is awesome!</span>
		<br />
		<br />
		<input type="text" #inputElement (keyup)="0" />

	`,
	styleUrls: ['./my-component.component.css']


})

export class MyComponentComponent {
	name = 'MAX';
}