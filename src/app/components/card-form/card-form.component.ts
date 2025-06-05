import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service';
import { Card } from '../../models/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html'
})
export class CardFormComponent implements OnInit {
  card: Card = { name: '', type: '', rarity: 0, picture_url: '', hp: 0 };
  isEdit = false;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.cardService.getCard(+id).subscribe(c => this.card = c);
    }
  }

  onSubmit() {
    if (this.isEdit && this.card.id !== undefined) {
      this.cardService.updateCard(this.card.id, this.card).subscribe(() => this.router.navigate(['/']));
    } else {
      this.cardService.addCard(this.card).subscribe(() => this.router.navigate(['/']));
    }
  }
}
