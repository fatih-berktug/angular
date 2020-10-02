import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',

  //temlate göndermek yerine yazilabilir ama dosya daha iyidir
  // `<p>bu deger</p>`

  styleUrls: ['./villa.component.css']
})
export class VillaComponent implements OnInit {

  constructor() { }
  name='gelecek';

  ngOnInit(): void {
  }

}
