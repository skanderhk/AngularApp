import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  livres: Book[] = [
    {
      id: '1',
      titre: 'Android',
      imageUrl: 'assets/images/android.png',
      date: new Date('04/10/2020'),
      commander: false,
    },
    {
      id: '2',
      titre: 'Angular',
      imageUrl: 'assets/images/angular.png',
      date: new Date('02/02/2020'),
      commander: true,
    },
    {
      id: '3',
      titre: 'Bootstrap',
      imageUrl: 'assets/images/bootstrap.png',
      date: new Date('04/10/2020'),
      commander: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
