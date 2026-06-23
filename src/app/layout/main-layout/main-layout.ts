import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {Sidebar} from "../sidebar/sidebar";

@Component({
    selector: "app-main-layout",
    imports: [CommonModule, RouterOutlet, Sidebar],
    templateUrl: "./main-layout.html",
    styleUrl: "./main-layout.scss",
})
export class MainLayout {}
