import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataApiService } from './services/data-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-lab';

  //Array que almacena la informacion de la API
  allData: any[] = [];

  constructor(private dataApiService: DataApiService) {}
  ngOnInit(): void {
    //Hacemos un fetch para asignar los datos a nuestro array
    this.dataApiService.getData().subscribe((data) => {
      this.allData = data
      //console.log(data)
    })
  }
}
