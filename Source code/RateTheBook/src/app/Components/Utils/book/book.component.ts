import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/Interfaces/book';
import { ApiService } from 'src/app/Services/Api/api.service';

@Component({
  selector: 'util-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private Api:ApiService){}
  @Input() Books$: Observable<Book[]> = of([])
  @Output() Recommended: EventEmitter<Observable<Book[]>> = new EventEmitter<Observable<Book[]>>()
  color: String = "basic" || "accent";
  toggleColor(event: Event) {
    const button = event.target as unknown as MatIconButton;
    console.log(button.color)
    button.color = button.color == "accent" ? "primary" : "accent";
  }
  trackByISBN(index: number, book: Book): string {
    return book.ISBN;
  }
  getRecommendations(bookName: string) {
    this.Recommendations$ = this.Api.getRecommendations(bookName);
    this.Recommended.emit(this.Recommendations$);
  }
  Recommendations$: Observable<Book[]> = of([])
}
