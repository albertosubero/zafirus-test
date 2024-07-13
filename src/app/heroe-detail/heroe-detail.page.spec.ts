import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroeDetailPage } from './heroe-detail.page';

describe('HeroeDetailPage', () => {
  let component: HeroeDetailPage;
  let fixture: ComponentFixture<HeroeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
