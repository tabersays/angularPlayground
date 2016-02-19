import {Component, OnInit} from 'angular2/core'
import {BossyTooltip, BossyTooltipConfig} from 'app/components/bossy.tooltip'

@Component({
	selector: 'my-app',
	template: `
		<div>Not here</div>
		<bossy-tooltip [config]="myConfig"><span>Testing!</span></bossy-tooltip>
	`,
	directives: [BossyTooltip]
})

export class App implements OnInit{
	myConfig: BossyTooltipConfig;

	ngOnInit() {
		this.myConfig = {
			'align': '',
			'color': '',
			'icon': '',
			'iconFloat': '',
			'persists': false,
			'position': '',
			'progress': 0,
			'text': 'This is a test again',
			'type': ''
		};
	}
}