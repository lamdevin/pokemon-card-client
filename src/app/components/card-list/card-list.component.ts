import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service';
import { Card } from '../../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards().subscribe(data => this.cards = data);
  }

  deleteCard(id: number) {
    this.cardService.deleteCard(id).subscribe(() => this.loadCards());
  }
}
