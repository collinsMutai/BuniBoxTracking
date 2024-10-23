import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Bus {
  registration: string;
  route: string;
}

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css'],
})
export class BuslistComponent implements OnInit {
  buses: Bus[] = [
    { registration: 'KCA 112W', route: 'Nairobi - GM' },
    { registration: 'KDA 11B', route: 'Nairobi - Juja' },
    { registration: 'KBC 123A', route: 'Nairobi - Mombasa' },
    { registration: 'KDE 456C', route: 'Nairobi - Kisumu' },
    { registration: 'KDF 789D', route: 'Nairobi - Eldoret' },
    { registration: 'KHG 010E', route: 'Nairobi - Nakuru' },
    { registration: 'KLM 111F', route: 'Nairobi - Nyeri' },
    { registration: 'KNO 222G', route: 'Nairobi - Meru' },
    { registration: 'KOP 333H', route: 'Nairobi - Thika' },
    { registration: 'KQT 444I', route: 'Nairobi - Garissa' },
    { registration: 'KRU 555J', route: 'Nairobi - Machakos' },
    { registration: 'KSV 666K', route: 'Nairobi - Kericho' },
    { registration: 'KTU 777L', route: 'Nairobi - Bungoma' },
    { registration: 'KVA 888M', route: 'Nairobi - Kisii' },
    { registration: 'KWB 999N', route: 'Nairobi - Wajir' },
    { registration: 'KXC 000O', route: 'Nairobi - Kitale' },
    { registration: 'KYD 111P', route: 'Nairobi - Kajiado' },
    { registration: 'KZL 222Q', route: 'Nairobi - Nanyuki' },
    { registration: 'KAA 333R', route: 'Nairobi - Isiolo' },
    { registration: 'KBB 444S', route: 'Nairobi - Kakamega' },
  ];

  entriesOptions = [5, 10, 15, 20]; // Options for entries per page
  pageSize = this.entriesOptions[0]; // Default page size
  currentPage = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateFakeData();
  }

  generateFakeData() {
    for (let i = 1; i <= 20; i++) {
      this.buses.push({
        registration: `Bus ${i}`,
        route: `Route ${i}`,
      });
    }
  }

  viewBusHandler() {
    this.router.navigate(['/dashboard']);
  }

  get paginatedBuses() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.buses.slice(startIndex, startIndex + this.pageSize);
  }

  onEntriesPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = Number(selectElement.value);
    this.currentPage = 1; // Reset to first page when changing entries per page
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages() {
    return Math.ceil(this.buses.length / this.pageSize);
  }

  isLastPage() {
    return this.currentPage === this.totalPages;
  }

  isFirstPage() {
    return this.currentPage === 1;
  }
}
