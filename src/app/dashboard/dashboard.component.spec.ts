import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const comp = new DashboardComponent(new HeroService(httpClientSpy as any));
    const hero: Hero = {id: 42, name: 'Test'};
    comp.hero = hero;
  
    comp.selected.subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    comp.click();
  })
});
