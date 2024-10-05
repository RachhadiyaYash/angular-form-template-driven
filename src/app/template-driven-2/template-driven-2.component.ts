import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { stateData } from '../assets/states';

@Component({
  selector: 'app-template-driven-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-2.component.html',
  styleUrls: ['./template-driven-2.component.css'],
})
export class TemplateDriven2Component implements OnInit {
  form = {
    fname: '',
    lname: '',
    pan: '',
    mobile: '',
    email: '',
    age: null,
    city: '',
    state: '',
    birthday: '',
    district: '',
    subject: '',
    isAgrredToTerms: false,
    selectedExamLocation: 'Vadodra',
    uploadedFile: null as File | null,
  };

  states: any;
  districts: string[] = [];
  fileError: string | null = null;
  panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  stringRegx = /^[a-zA-Z]+$/;
  integreRegex = /^\d+$/;
  emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  selectedExamLocation: any;
  today: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.states = stateData;

    const todayDate = new Date();
    const yyyy = todayDate.getFullYear();
    const mm = String(todayDate.getMonth() + 1).padStart(2, '0');
    const dd = String(todayDate.getDate()).padStart(2, '0');
    this.today = `${yyyy}-${mm}-${dd}`;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileError = null;
    if (file) {
      if (file.type !== 'application/pdf') {
        this.fileError = 'Only PDF files are allowed.';
        return;
      }
      if (file.size > 1048576) {
        this.fileError = 'File size must be less than 1 MB.';
        return;
      }
      this.form.uploadedFile = file;
    }
  }

  loadStates() {
    this.http.get<any>('src/app/assets/states.json').subscribe({
      next: (data) => {
        console.log('Loaded states:', data);
        this.states = data.states;
      },
      error: (error) => {
        console.error('Error loading states:', error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }

  onStateChange(state: string) {
    const selectedState = this.states.find(
      (s: { state: string }) => s.state === state
    );
    this.districts = selectedState ? selectedState.districts : [];
    this.form.district = '';
  }

  registerFn(myForm: any) {
    console.log(myForm.form.value);
    myForm.resetForm();
    this.districts = [];
    this.fileError = null;
    this.form.uploadedFile = null;
  }
}
