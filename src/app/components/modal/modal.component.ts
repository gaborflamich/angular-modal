import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isModalOpen: boolean = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  // Listener just for one key
  @HostListener('keydown.esc', ['$event'])
  onEsc(event: KeyboardEvent) {
    this.closeModal();
  }

  // @HostListener('document:click', ['$event.target'])
  // onClick(targetElement: any): void {
  //   if (!this.isModalOpen) return;

  //   const clickedInsideModal = this.isClickedInsideModal(targetElement);
  //   if (!clickedInsideModal) {
  //     this.closeModal();
  //   }
  // }

  // public isClickedInsideModal(targetElement: any): boolean | undefined {
  //   const modalElement = document.getElementById('modal-container');
  //   return modalElement?.contains(targetElement);
  // }
}
