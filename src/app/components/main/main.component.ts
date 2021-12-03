import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  consructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  modeles: any[] = [
    {
      isActive: true,
      isChecked: true,
      id: 1,
      title: 'Pré-évaluation 1',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file1.pdf',
    },
    {
      isActive: true,
      isChecked: true,
      id: 2,
      title: 'Pré-évaluation 2',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file2.pdf',
    },
    {
      isActive: false,
      isChecked: true,
      id: 3,
      title: 'Pré-évaluation 3',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file3.pdf',
    },
    {
      isActive: true,
      isChecked: false,
      id: 4,
      title: 'Pré-évaluation 4',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file1.pdf',
    },
    {
      isActive: true,
      isChecked: true,
      id: 5,
      title: 'Pré-évaluation 5',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file2.pdf',
    },
    {
      isActive: true,
      isChecked: true,
      id: 6,
      title: 'Pré-évaluation 6',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file3.pdf',
    },
    {
      isActive: true,
      isChecked: false,
      id: 7,
      title: 'Pré-évaluation 7',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file1.pdf',
    },
    {
      isActive: true,
      isChecked: true,
      id: 8,
      title: 'Pré-évaluation 8',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file2.pdf',
    },
    {
      isActive: true,
      isChecked: false,
      id: 9,
      title: 'Pré-évaluation 9',
      date: '31/07/2021 a 21:34',
      src: '../../../assets/file3.pdf',
    },
  ];
  filtredModeles: any[] = this.modeles;
  page: number = 1;
  ShowedFile: string = this.modeles[0].src;
  ngOnInit(): void {}

  changeIsChecked(model: any) {
    model.isChecked = !model.isChecked;
  }
  changeItemStatus(model: any) {
    model.isActive = !model.isActive;
  }

  viewFile(model: any) {
    this.ShowedFile = model.src;
  }
  searchValue: string = '';

  search() {
    if (this.searchValue == '') {
      this.filtredModeles = this.modeles;
    } else {
      this.filtredModeles = this.modeles.filter((x) =>
        x.title.includes(this.searchValue)
      );
    }
  }
}
