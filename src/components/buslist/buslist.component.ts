import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Bus {
  id: number;
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
    { id: 1, registration: 'KCA 112W', route: 'Nairobi - GM' },
    { id: 2, registration: 'KDA 11B', route: 'Nairobi - Juja' },
    { id: 3, registration: 'KBC 123A', route: 'Nairobi - Mombasa' },
    { id: 4, registration: 'KDE 456C', route: 'Nairobi - Kisumu' },
    { id: 5, registration: 'KDF 789D', route: 'Nairobi - Eldoret' },
    { id: 6, registration: 'KHG 010E', route: 'Nairobi - Nakuru' },
    { id: 7, registration: 'KLM 111F', route: 'Nairobi - Nyeri' },
    { id: 8, registration: 'KNO 222G', route: 'Nairobi - Meru' },
    { id: 9, registration: 'KOP 333H', route: 'Nairobi - Thika' },
    { id: 10, registration: 'KQT 444I', route: 'Nairobi - Garissa' },
    { id: 11, registration: 'KRU 555J', route: 'Nairobi - Machakos' },
    { id: 12, registration: 'KSV 666K', route: 'Nairobi - Kericho' },
    { id: 13, registration: 'KTU 777L', route: 'Nairobi - Bungoma' },
    { id: 14, registration: 'KVA 888M', route: 'Nairobi - Kisii' },
    { id: 15, registration: 'KWB 999N', route: 'Nairobi - Wajir' },
    { id: 16, registration: 'KXC 000O', route: 'Nairobi - Kitale' },
    { id: 17, registration: 'KYD 111P', route: 'Nairobi - Kajiado' },
    { id: 18, registration: 'KZL 222Q', route: 'Nairobi - Nanyuki' },
    { id: 19, registration: 'KAA 333R', route: 'Nairobi - Isiolo' },
    { id: 20, registration: 'KBB 444S', route: 'Nairobi - Kakamega' },
  ];

  filteredBuses: Bus[] = [];
  entriesOptions = [5, 10, 15, 20];
  pageSize = this.entriesOptions[0];
  currentPage = 1;
  selectedOption: number = this.entriesOptions[0];
  searchTerm: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.generateFakeData();
    this.filteredBuses = this.buses;
  }

  // generateFakeData() {
  //   for (let i = 1; i <= 20; i++) {
  //     this.buses.push({
  //       id: i,
  //       registration: `Bus ${i}`,
  //       route: `Route ${i}`,
  //     });
  //   }
  // }

  viewBusHandler(busId: number) {
    this.router.navigate(['/dashboard', busId]); 
  }


  filterBuses() {
    this.filteredBuses = this.buses.filter(
      (bus) =>
        bus.registration
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        bus.route.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page when filtering
  }

  // Update paginated buses based on filtered results
  get paginatedBuses() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredBuses.slice(startIndex, startIndex + this.pageSize);
  }

  selectOption(option: number) {
    this.pageSize = option;
    this.selectedOption = option;
    this.currentPage = 1;
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
