import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a background image', () => {
    expect(de.query(By.css('.bgimg')).nativeElement).toBeTruthy();
  });

  it('should have logo and tagline elements in HTML',()=>{
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Tranzit');
    expect(de.query(By.css('p')).nativeElement.innerText).toContain('School Transport made easy');
  });

  it('should have login and contact admin buttons', ()=>{
    expect(de.query(By.css('#login')).nativeElement).toBeTruthy();
    expect(de.query(By.css('#contact')).nativeElement).toBeTruthy();
  });
});
