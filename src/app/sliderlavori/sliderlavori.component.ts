import { Component } from '@angular/core';
import { Lavoro } from '../lavoro.model';

@Component({
  selector: 'app-sliderlavori',
  templateUrl: './sliderlavori.component.html',
  styleUrls: ['./sliderlavori.component.css'],
})
export class SliderlavoriComponent {
  public lavori: Lavoro[] = [
    new Lavoro('../../assets/images/bagno.jpg', 'bagno'),
    new Lavoro('../../assets/images/bagno1.jpg', 'bagno1'),
    new Lavoro('../../assets/images/bagno2.jpg', 'bagno2'),
    new Lavoro('../../assets/images/bagno3.jpg', 'bagno3'),
    new Lavoro('../../assets/images/bagno4.jpg', 'bagno4'),
    new Lavoro('../../assets/images/bagno5.jpg', 'bagno5'),
    new Lavoro('../../assets/images/dettaglio - altro.jpg', 'dettaglio-altro'),
    new Lavoro('../../assets/images/dettaglio detto.jpg', 'dettaglio-tetto'),
    new Lavoro('../../assets/images/dettaglio tetto2.jpg', 'dettaglio-tetto2'),
    new Lavoro('../../assets/images/finestr.jpg', 'finestra'),
    new Lavoro('../../assets/images/ingresso.jpg', 'ingresso'),
    new Lavoro('../../assets/images/pezzobagno.jpg', 'ingresso'),
    new Lavoro('../../assets/images/placaggio bagno.jpg', 'placaggio'),
    new Lavoro('../../assets/images/placaggio bagno2.jpg', 'placaggio'),
    new Lavoro('../../assets/images/porta1.jpg', 'porta'),
    new Lavoro('../../assets/images/scale.jpg', 'scale'),
    new Lavoro('../../assets/images/scale1.jpg', 'scale'),
  ];
}
