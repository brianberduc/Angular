import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  
  template: `
    <p>
      title works!
    </p>
  `,
  styles: `
  h1 {
  text-decorator: underline;
  }
  p {
  background-color: green;
  }
  `
})
export class TitleComponent {

}
