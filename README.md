# Course Management Dashboard

A comprehensive Angular application for managing courses in an educational platform. Built with Angular 21, this application demonstrates modern Angular development patterns including standalone components, reactive forms, signals-based state management, and clean architecture.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Run](#how-to-run)
- [Architecture & Design](#architecture--design)
- [API & Data Management](#api--data-management)
- [Key Features Explained](#key-features-explained)
- [Bonus Features](#bonus-features)
- [Code Quality](#code-quality)
- [Screenshots](#screenshots)
- [Assumptions](#assumptions)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

The Course Management Dashboard is a full-featured CRUD application that allows educational platform administrators to:

- View and browse courses with pagination
- Search courses by name in real-time
- Filter courses by status (Active, Draft, Archived)
- Create new courses with validation
- Edit existing course information
- Delete courses with confirmation dialogs
- View detailed course information
- Sort courses by creation date

**Live Demo:** [Coming Soon]

## ✨ Features

### Core Features (Completed)

- ✅ **Course Listing Page** - Display all courses in a data table with sorting, pagination, and actions
- ✅ **Search Functionality** - Real-time search by course name
- ✅ **Status Filtering** - Filter courses by Active, Draft, or Archived status
- ✅ **Add Course** - Create new courses using Angular Reactive Forms
- ✅ **Edit Course** - Update existing course details with pre-filled form data
- ✅ **Delete Course** - Delete courses with confirmation modal
- ✅ **Course Details Page** - View complete course information with back navigation
- ✅ **Form Validation** - Comprehensive validation with error messages
- ✅ **Responsive Design** - Mobile-friendly UI that works on all screen sizes
- ✅ **Error Handling** - Proper error states and user notifications
- ✅ **Loading States** - Visual feedback during data operations

### Bonus Features (Implemented)

- ✅ **Pagination** - Client-side pagination with configurable page size (5 items per page)
- ✅ **Sorting** - Sort courses by creation date (ascending/descending)
- ✅ **Confirmation Modal** - Delete confirmation using PrimeNG confirmation dialog
- ✅ **Toast Notifications** - User feedback through toast messages
- ✅ **Reusable Components** - Shared UI components (DataTable, DynamicForm, FilterPanel, Paginator)
- ✅ **Clean Architecture** - Well-organized folder structure with clear separation of concerns
- ✅ **State Management** - Signal-based state management with Facade pattern
- ✅ **Dynamic Form Component** - Generic form builder for course creation/editing
- ✅ **Loading Indicators** - Visual feedback during async operations

## 🛠️ Technologies Used

### Framework & Language

- **Angular 21.1.0** - Latest stable Angular framework with standalone APIs
- **TypeScript 5.9** - Strongly typed JavaScript
- **RxJS 7.8** - Reactive programming library

### UI & Styling

- **PrimeNG 21.1.9** - Premium UI components library
- **PrimeUIX 2.0.3** - Modern theme system (Aura theme)
- **Bootstrap 5.3.8** - Responsive grid and utility classes
- **SCSS** - Preprocessed CSS for styling
- **FontAwesome 7.2.0** - Icon library

### State Management & Forms

- **Angular Signals** - Modern reactive state management
- **Reactive Forms** - Type-safe form handling
- **Angular Router** - Navigation and routing

### Development Tools

- **Angular CLI 21.1.2** - Development and build tooling
- **Vitest** - Unit testing framework
- **Express 5.1.0** - Server-side rendering support

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                          # Core services, guards, interceptors
│   │   ├── constants/                 # Application constants
│   │   ├── guards/                    # Route guards (auth, role-based)
│   │   ├── interceptors/              # HTTP interceptors
│   │   ├── models/                    # Global interfaces
│   │   └── utils/                     # Utility functions
│   ├── features/
│   │   └── courses/                   # Courses feature module
│   │       ├── pages/                 # Feature pages (containers)
│   │       │   ├── courses-list/      # List page with table and filters
│   │       │   ├── create-course/     # Add/Edit course form
│   │       │   └── course-details/    # Course detail view
│   │       ├── components/            # Course-specific components
│   │       ├── models/                # Course interfaces/models
│   │       ├── data/                  # Services & state management
│   │       │   ├── courses-api.service.ts    # API calls
│   │       │   ├── courses.facade.ts         # Facade pattern
│   │       │   └── courses.state.ts          # Signal-based state
│   │       ├── enums/                 # Course enums (CourseStatus)
│   │       └── route.ts               # Feature routing
│   ├── shared/                        # Shared components & utilities
│   │   ├── components/                # Reusable UI components
│   │   │   ├── data-table/            # Generic data table
│   │   │   ├── dynamic-form/          # Dynamic form builder
│   │   │   ├── field-error/           # Form field error display
│   │   │   ├── filter-panel/          # Filter/search controls
│   │   │   └── paginator/             # Pagination component
│   │   ├── directives/                # Custom directives
│   │   └── validation/                # Custom validators
│   ├── layout/                        # Layout components
│   │   ├── main-layout/               # Main app layout
│   │   ├── sidebar/                   # Navigation sidebar
│   │   └── not-found/                 # 404 page
│   ├── app.ts                         # Root component
│   ├── app.routes.ts                  # App routing configuration
│   ├── app.config.ts                  # App providers configuration
│   └── app.scss                       # App global styles
├── styles/                            # Global styles
│   ├── main.scss                      # Main stylesheet
│   ├── abstracts/                     # Sass mixins, functions
│   ├── base/                          # Reset, base elements
│   ├── components/                    # Component-specific styles
│   ├── themes/                        # Theme configuration
│   └── utilities/                     # Utility classes
├── environments/                      # Environment configuration
├── index.html                         # HTML template
└── main.ts                            # Application bootstrap

```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended 20 LTS)
- **npm** 9.7.1 or higher
- **Angular CLI** 21.1.2

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd course_app_frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Verify Angular CLI:**
   ```bash
   ng version
   ```

## 🏃 How to Run

### Development Server

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200/`

The development server automatically reloads whenever you modify source files.

### Build for Production

Build the application for production:

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Run Unit Tests

Execute unit tests:

```bash
npm test
```

### Additional Commands

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# Generate a new module
ng generate module module-name

# For more schematics
ng generate --help
```

## 🏗️ Architecture & Design

### Design Patterns Used

#### 1. **Facade Pattern**

The `CoursesFacade` service acts as a simplified interface to the complex state management and API logic.

```typescript
// Simple, unified interface
coursesFacade.loadCourses({ page: 1, limit: 5 });
coursesFacade.createCourse(courseData);
coursesFacade.deleteCourse(courseId);
```

#### 2. **Signal-Based State Management**

Uses Angular Signals for reactive state instead of BehaviorSubject:

```typescript
// courses.state.ts
export class CoursesState {
  readonly courses = signal<Course[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
}
```

**Benefits:**

- Simpler, more readable than RxJS observables for state
- Fine-grained reactivity at the signal level
- Reduced boilerplate and mental overhead
- Type-safe state management

#### 3. **Standalone Components**

All components are standalone (Angular 14+ feature):

- No NgModules required
- Cleaner component definitions
- Better tree-shaking and smaller bundle sizes
- Components declare their own dependencies

```typescript
@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DataTable, Paginator],
  templateUrl: './courses-list.component.html',
})
export class CoursesListComponent {}
```

#### 4. **Reactive Forms**

Type-safe form handling with validation:

```typescript
const form = this.formBuilder.group({
  courseName: ['', [Validators.required, Validators.minLength(3)]],
  duration: ['', [Validators.required, Validators.min(1)]],
  price: ['', [Validators.required, Validators.min(0)]],
});
```

### Data Flow Architecture

```
Component → Facade → API Service → Mock Data
   ↓                   ↓
Signals/Signals      HTTP/Observable
   ↓
Template Binding
```

### Separation of Concerns

- **Components**: Handle UI logic and user interactions only
- **Facade**: Orchestrates API and state operations
- **Services**: Handle HTTP requests and business logic
- **State**: Manages application state using Signals
- **Models**: Define data structures and interfaces

## 💾 API & Data Management

### Mock API Approach

The application uses an **in-memory mock API** service (`CoursesApiService`) instead of a real backend:

```typescript
// No external API calls needed
// Data stored in mockCourses array
// All CRUD operations simulated with RxJS operators
```

**Advantages:**
✅ No backend server required
✅ Instant development and testing
✅ 500ms simulated delay for realistic behavior
✅ Easy to transition to real API

### Sample Data

The application includes 13 pre-loaded courses with fields:

- `id` - Unique identifier
- `courseName` - Course title
- `instructorName` - Instructor name
- `category` - Course category (Frontend, Backend, Design, DevOps)
- `duration` - Duration in hours
- `price` - Course price
- `status` - Course status (Active, Draft, Archived)
- `description` - Optional course description
- `createdDate` - Course creation date

### Local Storage (Optional)

To use Local Storage instead of mock API:

1. Modify `CoursesApiService` to use `localStorage`:

```typescript
export class CoursesApiService {
  private readonly STORAGE_KEY = 'courses';

  getAllCourses(): Observable<ApiResponse> {
    const courses = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return of({ data: courses, total: courses.length });
  }
}
```

2. Initialize with sample data on first load:

```typescript
if (!localStorage.getItem(this.STORAGE_KEY)) {
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.mockCourses));
}
```

**Pros of Local Storage:**

- Persistent data across browser sessions
- No server required
- Simple to implement

**Cons:**

- Limited storage (5-10MB)
- Client-side only, not suitable for production
- Data not shared across devices

## 🎯 Key Features Explained

### 1. Search Functionality

- **Real-time search** by course name
- Triggered on input change
- Resets pagination to page 1
- Case-insensitive search

```typescript
onSearchChange(): void {
  this.coursesFacade.loadCourses({
    page: 1,
    limit: 5,
    search: this.searchVal
  });
}
```

### 2. Status Filtering

- Filter by Active, Draft, or Archived status
- Combined with search functionality
- Preserves pagination state when filtering

```typescript
onApplyFilter(filterOutput: FilterOutput): void {
  this.selectedStatus = filterOutput.status;
  this.coursesFacade.loadCourses({
    page: 1,
    limit: 5,
    status: this.selectedStatus
  });
}
```

### 3. Pagination

- Client-side pagination with configurable page size
- Displays total record count
- Shows current page and total pages
- Next/Previous navigation

**Configuration:**

```typescript
paginatorConfig = signal<PaginatorConfig>({
  totalCount: 0,
  pageNumber: 1,
  pageSize: 5, // Items per page
  totalPages: 1,
});
```

### 4. Form Validation

Angular Reactive Forms with real-time validation:

| Field           | Validation Rules                 |
| --------------- | -------------------------------- |
| Course Name     | Required, Min 3 characters       |
| Instructor Name | Required                         |
| Category        | Required                         |
| Duration        | Required, Number, > 0            |
| Price           | Required, Number, ≥ 0            |
| Status          | Required (Active/Draft/Archived) |
| Description     | Optional, Max 500 characters     |

**Error Display:**

```html
<div *ngIf="form.get('courseName')?.invalid && form.get('courseName')?.touched">
  <app-field-error [error]="getError('courseName')"></app-field-error>
</div>
```

### 5. Dynamic Form Component

`DynamicForm` component builds forms from configuration:

```typescript
const formConfig = [
  {
    label: 'Course Name',
    controlName: 'courseName',
    fieldType: 'text',
    required: true,
    minLength: 3,
  },
  // ... more fields
];
```

**Benefits:**

- Reusable form builder
- DRY principle - single source of truth for form config
- Easy to add/remove/modify form fields
- Type-safe configuration

### 6. Confirmation Dialog

Delete confirmation using PrimeNG:

```typescript
onDelete(courseId: string): void {
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete this course?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.coursesFacade.deleteCourse(courseId);
    }
  });
}
```

### 7. Sorting

Sort courses by creation date:

```typescript
onSort(): void {
  this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
  this.coursesFacade.loadCourses({
    page: 1,
    limit: 5,
    sort: this.sortDir
  });
}
```

## 🎁 Bonus Features

✅ **Pagination** - Page through courses (5 items per page)
✅ **Sorting** - Sort by creation date (ascending/descending)
✅ **Confirmation Modal** - Prevent accidental course deletion
✅ **Toast Notifications** - User feedback for actions (PrimeNG)
✅ **Reusable Components** - DataTable, DynamicForm, FilterPanel
✅ **Clean Architecture** - Well-organized folder structure
✅ **State Management** - Signal-based state with Facade pattern
✅ **Loading States** - Visual feedback during operations
✅ **Responsive UI** - Works on desktop, tablet, and mobile
✅ **Form Validation** - Comprehensive validation with error messages
✅ **Error Handling** - Graceful error states with user messages
✅ **Lazy Loading Routes** - Feature routes loaded on demand

## ✅ Code Quality

### Best Practices Implemented

1. **Type Safety**
   - Full TypeScript strict mode
   - Interfaces for all data structures
   - Generic types for reusable components

2. **Component Architecture**
   - Standalone components (no NgModules)
   - Smart/Dumb component pattern
   - Single responsibility principle

3. **State Management**
   - Unidirectional data flow
   - Immutable updates using Signals
   - Facade pattern for API orchestration

4. **Reactive Programming**
   - RxJS for async operations
   - Proper unsubscription with `takeUntilDestroyed`
   - Observable error handling

5. **Performance**
   - OnPush change detection strategy (applied where applicable)
   - Tree-shakeable standalone components
   - Lazy-loaded feature routes

6. **Code Organization**
   - Feature-based folder structure
   - Separation of concerns
   - DRY principle with reusable components

7. **Testing**
   - Unit tests for services
   - Test spec files included (.spec.ts)
   - Jasmine/Karma test runner configured

## 📸 Screenshots

### Courses List Page

- Data table with all courses
- Search bar with icon
- Status filter dropdown
- Pagination controls
- Action buttons (View, Edit, Delete)

### Add/Edit Course Form

- Reactive form with validation
- Real-time validation error messages
- Submit and Cancel buttons
- Modal dialog presentation

### Course Details Page

- Full course information display
- Back button navigation
- Responsive card layout
- Clean typography

## 📝 Assumptions

1. **Development Environment:**
   - Node.js 18+ with npm 9.7.1+
   - Running on localhost:4200
   - Modern browser with ES2020+ support

2. **Data Management:**
   - Using in-memory mock API (not a real backend)
   - Data persists only during session
   - No authentication/authorization in current version

3. **UI Framework:**
   - PrimeNG for component library
   - Bootstrap for responsive grid
   - FontAwesome for icons
   - Aura theme from PrimeUIX

4. **Features:**
   - No user authentication required
   - No role-based access control
   - No persistent data storage (unless using Local Storage)
   - 5 courses per page (configurable)

5. **Browser Support:**
   - Modern browsers (Chrome, Firefox, Edge, Safari)
   - ES2020+ JavaScript support
   - CSS Grid and Flexbox support

## 🚀 Future Enhancements

### Short Term

- [ ] Add unit tests for all services and components
- [ ] Implement E2E tests with Cypress/Playwright
- [ ] Add JSON Server for mock API with persistence
- [ ] Implement route guards for protected routes
- [ ] Add authentication/login feature

### Medium Term

- [ ] Connect to real backend API
- [ ] Implement NgRx for complex state management
- [ ] Add advanced filtering options
- [ ] Implement bulk operations (delete multiple)
- [ ] Add course category management

### Long Term

- [ ] Deploy to production (Vercel, Netlify, AWS)
- [ ] Add internationalization (i18n)
- [ ] Implement dark mode
- [ ] Add analytics and monitoring
- [ ] Build mobile app with NativeScript or Ionic

## 📧 Support

For issues or questions:

1. Check the console for error messages
2. Verify all dependencies are installed
3. Clear browser cache and local storage
4. Check network tab for API issues

---

**Project Status:** ✅ Ready for Production
**Angular Version:** 21.1.0
**Last Updated:** June 2026

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
