import { Component, OnInit } from '@angular/core';
import { Listing } from '../services/listing';
import { ListingsService } from '../services/listings/listings.service';

const emptyListing: Listing = {
  id: null,
  name: '',
  description: '',
  price: '',
};

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {
  listings = [];
  selectedListing = emptyListing;
  originalName = '';

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.fetchListings();
  }

  selectListing(listing) {
    this.selectedListing = listing;
  }

  fetchListings() {
    this.listingsService
      .all()
      .subscribe((result: any) => (this.listings = result));
  }

  saveListing(listing) {
    if (listing.id) {
      this.updateListing(listing);
    } else {
      this.createListing(listing);
    }
  }

  createListing(listing) {
    this.listingsService
      .create(listing)
      .subscribe((result) => this.fetchListings());
  }

  updateListing(listing) {
    this.listingsService
      .update(listing)
      .subscribe((result) => this.fetchListings());
  }

  deleteListing(listingId) {
    console.log('Delete Listing', listingId);
  }

  reset() {
    this.selectListing({ ...emptyListing });
  }
}
