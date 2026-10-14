import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('studentBoard');
    firstName = 'Kelly';
    lastName = 'Stegura';
    imageUrl = 'https://thewooffy.com/cdn/shop/articles/04-puppy_7c68cb65-68ac-4400-b300-2dda63f02423.png?v=1791499691&width=1100';
count = 0;

increment() {
    this.count++; 
}
}
