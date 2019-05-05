import { Component, OnInit } from '@angular/core';
import { ConstructorService } from '../constructor.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css']
})
export class ConstructorsComponent implements OnInit {

  public constructors = [];

  constructor(private _constructorService: ConstructorService) { }

  ngOnInit() {
    this._constructorService.getConstructors()
            .subscribe(data => this.constructors = data);
  }

}
