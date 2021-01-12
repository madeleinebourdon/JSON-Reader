import { Component, OnInit } from '@angular/core';
import json from '../../../assets/RGAA4.json';
import { log } from 'util';

@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.scss']
})
export class ReadJsonComponent implements OnInit {
  jsonInfo = json.info;
  jsonContent = json.content;

  selectedCategoryName: string = '';
  selectedCategoryNumber: number = null;

  subCategoriesArray = []
  selectedSubCategoryName: string = '';
  selectedSubCategoryNumber: number = null;

  paragraphsArray = []

  // Quand la catégorie sélectionnée change
  selectCatChangeHandler(event: any) {
    this.selectedCategoryNumber = event.target.value;
    this.selectedCategoryName = this.jsonContent[this.selectedCategoryNumber - 1].name;
    this.subCategoriesArray = this.jsonContent[this.selectedCategoryNumber - 1].subcontent;

    console.log(this.subCategoriesArray)

    this.selectedSubCategoryNumber = this.selectedSubCategoryName = null;
  }

  // Quand la sous-catégorie sélectionnée change
  selectSubCatChangeHandler(event: any) {
    this.selectedSubCategoryNumber = event.target.value;
    this.selectedCategoryNumber = Math.trunc(this.selectedSubCategoryNumber);

    // Si un critère en particulier a été sélectionné
    if (this.selectedSubCategoryNumber) {
      this.subCategoriesArray = this.jsonContent[this.selectedCategoryNumber - 1].subcontent
      this.selectedSubCategoryName = this.subCategoriesArray.find(element => element.value == this.selectedSubCategoryNumber).name;

      this.paragraphsArray = this.subCategoriesArray.find(element => element.value == this.selectedSubCategoryNumber).paragraph;
      // console.log(this.paragraphsArray)
    }
  }

  // Bouton pour copier les préco
  copyButton(toCopy, event) {
    // console.log(event)
    if (toCopy) {
      let transformedContent = Object.values(toCopy).join('\n');
      navigator.clipboard.writeText(transformedContent).then(function () {
        console.log('Le texte "' + transformedContent + '" a été copié avec succès')
        event.target.classList.add('MyClass')
      }, function () {
        console.log('Erreur lors de la copie de "' + transformedContent + '"')
      });
    }
  }

  // empêche le pipe "keyvalue" de trier par index (plutôt que de laisser l'ordre du tableau qu'il a reçu)
  returnZero() { return 0 }

  constructor() {
  }

  ngOnInit() {
    // console.log('JSON chargé :');
    // console.log(json);
  }
}
