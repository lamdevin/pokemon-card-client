import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html'
})
export class CardDetailComponent implements OnInit {
  card?: Card;

  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cardService.getCard(id).subscribe(card => this.card = card);
  }
}
