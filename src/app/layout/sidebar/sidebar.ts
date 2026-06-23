import { Component, inject, OnInit, signal, ViewEncapsulation } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DrawerModule } from "primeng/drawer";
import { ButtonModule } from "primeng/button";

import { NavItem } from "./models/nav-item.interface";

import { routes } from "../../app.routes";
import { extractSidebarItems } from "../../core/utils/extract-sidebar-items.util";

@Component({
    selector: "app-sidebar",
    imports: [CommonModule, RouterModule, NgOptimizedImage, DrawerModule, ButtonModule],
    templateUrl: "./sidebar.html",
    styleUrl: "./sidebar.scss",
})
export class Sidebar {

    /** Controls the mobile drawer visibility */
    drawerVisible = signal(false);

    /** Called by the header hamburger button to open the mobile drawer */
    openDrawer() {
        this.drawerVisible.set(true);
    }

    navItems: NavItem[] = extractSidebarItems(routes);

  

    logout() {
    }
}
