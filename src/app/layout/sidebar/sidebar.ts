import { Component, inject, OnInit, signal, OnDestroy, PLATFORM_ID, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

import { NavItem } from './models/nav-item.interface';
import { StorageService } from '../../core/services/storage.service';

import { routes } from '../../app.routes';
import { extractSidebarItems } from '../../core/utils/extract-sidebar-items.util';
import { LOCALSTORAGE_KEY } from '../../core/constants/localstorage-key.const';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgOptimizedImage, DrawerModule, ButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit, OnDestroy {
  /** Controls the mobile drawer visibility */
  drawerVisible = signal(false);

  private mediaQueryList: MediaQueryList | null = null;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private storageService = inject(StorageService);

  constructor() {
    // Auto-save drawer state whenever it changes
    effect(() => {
      const isOpen = this.drawerVisible();
      this.saveDrawerState(isOpen);
    });
  }

  /** Called by the header hamburger button to open the mobile drawer */
  openDrawer() {
    this.drawerVisible.set(true);
  }

  navItems: NavItem[] = extractSidebarItems(routes);

  ngOnInit() {
    // Only run browser logic on client side
    if (!this.isBrowser) return;

    // Restore drawer state from storage
    const savedState = this.storageService.get<boolean>(LOCALSTORAGE_KEY.DRAWER_STATE_KEY);
    if (savedState !== null) {
      this.drawerVisible.set(savedState);
    }

    // Check initial screen size and close drawer if on desktop
    this.closeDrawerIfDesktop();

    // Listen for media query changes
    if (window.matchMedia) {
      this.mediaQueryList = window.matchMedia('(max-width: 1024px)');
      this.mediaQueryList.addEventListener('change', this.handleMediaChange.bind(this));
    }
  }

  ngOnDestroy() {
    // Clean up listener
    if (this.mediaQueryList) {
      this.mediaQueryList.removeEventListener('change', this.handleMediaChange.bind(this));
    }
  }

  private handleMediaChange(event: MediaQueryListEvent) {
    if (!event.matches) {
      this.closeDrawerIfDesktop();
    }
  }

  private closeDrawerIfDesktop() {
    if (window.innerWidth > 1024) {
      this.drawerVisible.set(false);
    }
  }

  private saveDrawerState(isOpen: boolean) {
    this.storageService.set(LOCALSTORAGE_KEY.DRAWER_STATE_KEY, isOpen);
  }

  logout() {}
}
