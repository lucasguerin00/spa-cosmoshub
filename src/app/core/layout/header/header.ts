import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Toolbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {}
