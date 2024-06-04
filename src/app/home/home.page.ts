import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFabList, IonFab, IonIcon, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronUpCircle, colorPalette, document, globe } from 'ionicons/icons';
import { Keyboard } from '@capacitor/keyboard';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, NgClass, IonIcon, IonFab, IonFabList, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit, OnDestroy {
  showFab = true;
  @ViewChild('fab') fab!: ElementRef;
  constructor() {
    addIcons({ chevronUpCircle, colorPalette, document, globe });
  }

  ngOnInit(): void {
    Keyboard.addListener('keyboardWillShow', () => {
      this.showFab = false;
    });
    Keyboard.addListener('keyboardWillHide', () => {
      this.showFab = true;

    });
  }

  async ngOnDestroy() {
    await Keyboard.removeAllListeners();
  }
}
