import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    @Input() card!: Card

    title: string = "Enter a title";
    text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi?";

    ngOnInit(): void {

    }
    changeTitle() {
        this.card.title = "Title has been changed"
    }
    inputhandler(event: any) {
        const value = event.target.value;
        this.card.title = value;
    }
    changeHandler() {
        console.log(this.card.title)
    }
}