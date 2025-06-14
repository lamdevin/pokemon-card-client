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
  loading = true;
  error = false;
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
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading cards:', err);
        this.error = true;
        this.errorMessage = 'Could not load cards. Error contacting server.';
        this.loading = false;
      }
    });
  }

  deleteCard(id: number) {
    this.cardService.deleteCard(id).subscribe(() => this.loadCards());
  }
}
