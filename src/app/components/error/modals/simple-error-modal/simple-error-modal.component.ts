import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-error-modal',
  templateUrl: './simple-error-modal.component.html',
  styleUrls: ['./simple-error-modal.component.css']
})
export class SimpleErrorModalComponent implements OnInit {

  theModalTitle: string = '';
  theErrorMessage: string = '';

  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'simple-erro-modal-title' });
  }

  closeModal() {
    this.activeModal.close("Modal closed");
  }
}