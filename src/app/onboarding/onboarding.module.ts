import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OnboardingRoutingModule, SharedModule]
})
export class OnboardingModule {}
