# Audience Management Dashboard

A modern React TypeScript application for managing audience data with a beautiful, responsive UI built with Tailwind CSS.

## Features

- **Modern UI Design**: Pixel-perfect replication of the provided design
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Interactive Components**:
  - Expandable sidebar with hover effects
  - Dropdown navigation with Admin/Community views
  - Tabbed interface for different audience segments
  - Paginated data table with selection capabilities
  - Search functionality
  - Filter system
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd circle-4-0
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Top navigation bar
│   ├── Sidebar.tsx     # Left sidebar with menu items
│   ├── ManageAudience.tsx # Main audience management interface
│   └── Community.tsx   # Community view component
├── data/               # Mock data and configurations
│   └── mockData.ts     # Sample user data and sidebar items
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Components

### Navbar

- Logo and branding
- View mode dropdown (Admin/Community)
- Search functionality
- User profile and notifications

### Sidebar

- Collapsible menu with icons
- Hover effects and tooltips
- Expandable sub-menus
- Settings icon at bottom

### ManageAudience

- Tabbed interface for different audience segments
- Filter system
- Data table with pagination
- Bulk selection and actions
- Loading states

### Community

- Placeholder for community view
- Dashboard-style layout

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Create React App** - Build tool

## Customization

### Adding New Menu Items

Edit `src/data/mockData.ts` to add new sidebar items:

```typescript
export const sidebarItems: SidebarItem[] = [
  {
    id: 'new-section',
    title: 'New Section',
    icon: '🔧',
    subItems: [{ id: 'new-item', title: 'New Item' }],
  },
];
```

### Modifying User Data

Update the mock users in `src/data/mockData.ts`:

```typescript
export const mockUsers: User[] = [
  {
    id: 'new-user',
    name: 'New User',
    email: 'newuser@example.com',
    // ... other properties
  },
];
```

### Styling Changes

The application uses Tailwind CSS. Modify `tailwind.config.js` for theme customization.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
