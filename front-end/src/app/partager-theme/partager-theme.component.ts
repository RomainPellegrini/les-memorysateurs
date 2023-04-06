import { Component } from '@angular/core';
import {Cardable} from "../../models/cardable.models";
import {Router} from "@angular/router";
import {ThemeService} from "../services/theme.service";
import {PatientService} from "../services/patient.service";
import {Theme} from "../../models/theme.models";
import {Patient} from "../../models/patient.models";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-partager-theme',
  templateUrl: './partager-theme.component.html',
  styleUrls: ['./partager-theme.component.scss']
})
export class PartagerThemeComponent {
  public messageForm : FormGroup;

  public patient = this.patientService.patientSelectionne$;
  public partiesJouees: number = 0;
  public nom: string = "";
  public prenom: string = "";
  public stockImage: string = "";
  public stade: string = "";

  constructor(public router: Router,public formBuilder: FormBuilder,public patientService : PatientService,public themeService : ThemeService) {

    this.messageForm = this.formBuilder.group({
      telephone : [''],
      message : ['']
    });

  }

  ngOnInit(): void {
    this.nom = this.patient.value?.nom as string;
    this.prenom = this.patient.value?.prenom as string;
    this.stockImage = this.patient.value?.photo as string;
    this.stade = "Stade " + this.patient.value?.stade as string;
  }

  retour(){
    this.themeService.setEditTheme(undefined);
    this.router.navigate(['/liste-theme']);
  }

  envoyer(){
    console.log("Tel : " + this.messageForm.value.telephone +  "\n message : " + this.messageForm.value.message);
  }
}
