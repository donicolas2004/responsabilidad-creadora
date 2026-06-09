/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute = 'home' | 'cec' | 'expansion-extrema';

export interface TimelineStep {
  id: string;
  stepNumber: string;
  title: string;
  glowColor: 'blue' | 'gold';
  content: string;
  bullets?: string[];
}

export interface EcosystemCard {
  title: string;
  description: string;
  iconName: string;
  bullets?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  popular: boolean;
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
}
