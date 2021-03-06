import { Component, OnInit,Input } from '@angular/core';
import { FastMailService } from '../fast-mail.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-fast-mail-item',
  templateUrl: './fast-mail-item.component.html',
  styleUrls: ['./fast-mail-item.component.scss']
})
export class FastMailItemComponent implements OnInit {
  @Input() good: Good

  constructor(private fService: FastMailService) { }

  ngOnInit() {
  }

  onClickDelete(): void {
    this.fService.deleteGoodsById(this.good.objectId).subscribe(data=>{
      location.href = "/fast-mail";
    });
  }

}
