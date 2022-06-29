import { Component, OnInit } from '@angular/core';
import { Rate } from '../app.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  @Input() data!: Rate;
  @Input() index!: number;
}
