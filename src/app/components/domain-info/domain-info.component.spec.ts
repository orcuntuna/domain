import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainInfoComponent } from './domain-info.component';

describe('DomainInfoComponent', () => {
  let component: DomainInfoComponent;
  let fixture: ComponentFixture<DomainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
