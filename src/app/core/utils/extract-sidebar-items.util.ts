import { Routes } from "@angular/router";
import { NavItem } from "../../layout/sidebar/models/nav-item.interface";


export function extractSidebarItems(routes: Routes): NavItem[] {
    const items: NavItem[] = [];

    function walk(routeList: Routes, parentPath = ""): void {
        for (const route of routeList) {
            const segment = route.path ?? "";

            // Build the full absolute path, collapsing duplicate slashes
            const fullPath = `${parentPath}/${segment}`.replace(/\/+/g, "/");

            if (route.data?.["sidebar"] === true) {
                items.push({
                    label:      route.data["label"]       ?? segment,
                    src:        route.data["icon"]        ?? "",
                    iconWidth:  route.data["iconWidth"]   ?? 16,
                    iconHeight: route.data["iconHeight"]  ?? 16,
                    alt:        route.data["label"]?.toLowerCase() ?? segment,
                    route:      fullPath,
                });
            }

            // Descend into static children (covers the spread-route pattern)
            if (route.children?.length) {
                walk(route.children as Routes, fullPath);
            }
        }
    }

    walk(routes);
    return items;
}
