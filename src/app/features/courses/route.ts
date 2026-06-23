import { AppRoute } from "../../core/models/app-route.interface";

export const courseRoute: AppRoute[] = [
    {
        path: "courses",
        data: {
            label: "Courses",
            iconWidth: 16,
            iconHeight: 12,
            sidebar: true,
            title: "Courses",
            icon: "./images/sidebar/courses.avif"
        },
        loadComponent: () =>
            import("./pages/courses-list/courses-list.component").then((m) => m.CoursesListComponent),
    },
    {
        path: "courses/:id",
        data: {
            label: "Course Details",
            sidebar: false,
            title: "Course Details",
        },
        loadComponent: () =>
            import("./pages/course-details/course-details.component").then((m) => m.CourseDetailsComponent),
    }
];