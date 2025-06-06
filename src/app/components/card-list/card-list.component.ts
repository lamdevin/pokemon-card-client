import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service';
import { Card } from '../../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  errorMessage: string = '';

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards().subscribe({
      next: (data) => {
        this.cards = data;
        if (this.cards.length === 0) {
          this.errorMessage = 'No cards found.';
        }
      },
      error: (err) => {
        console.error('Error loading cards:', err);
        this.errorMessage = 'Could not load cards. Error contacting server.';
      }
    });
  }

  deleteCard(id: number) {
    this.cardService.deleteCard(id).subscribe(() => this.loadCards());
  }
}
