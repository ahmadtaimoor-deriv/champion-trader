# champion-trader

A React TypeScript trading application built with modern technologies and best practices.

## Technologies

- React 18
- TypeScript
- TailwindCSS for styling
- Zustand for state management
- Axios for API communication
- Jest and React Testing Library for testing

## Getting Started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```bash
npm install
```

Then, you'll be able to run a development version of the project with:

```bash
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:4113/](http://localhost:4113/)

## Environment Configuration

The application supports different environments (development, staging, production) with environment-specific configurations. Create a `.env` file in the project root with the following variables:

```bash
# WebSocket Configuration
RSBUILD_WS_URL=ws://options-trading-api.deriv.ai          # WebSocket server URL
RSBUILD_WS_PUBLIC_PATH=/ws                   # Public WebSocket endpoint path
RSBUILD_WS_PROTECTED_PATH=/ws                # Protected WebSocket endpoint path

# REST API Configuration
RSBUILD_REST_URL=http://options-trading-api.deriv.ai      # REST API server URL
```

Default configurations per environment:

### Development
```typescript
{
  ws: {
    baseUrl: 'ws://options-trading-api.deriv.ai',
    publicPath: '/ws',
    protectedPath: '/ws'
  },
  rest: {
    baseUrl: 'http://options-trading-api.deriv.ai'
  }
}
```

### Staging
```typescript
{
  ws: {
    baseUrl: 'wss://options-trading-api.deriv.ai',
    publicPath: '/ws',
    protectedPath: '/ws'
  },
  rest: {
    baseUrl: 'https://options-trading-api.deriv.ai'
  }
}
```

### Production
```typescript
{
  ws: {
    baseUrl: 'wss://options-trading-api.deriv.ai',
    publicPath: '/ws',
    protectedPath: '/ws'
  },
  rest: {
    baseUrl: 'https://options-trading-api.deriv.ai'
  }
}
```

## Testing

Run all tests with:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm test -- --watch
```

### Testing Guidelines

- Follow Test-Driven Development (TDD) methodology
- Write tests before implementing functionality
- Maintain at least 90% test coverage
- Mock external dependencies (Axios, Zustand stores)
- Test edge cases explicitly

## Development Guidelines

### Component Design

- Follow Atomic Component Design principles
- Components should be self-contained and independent
- Use TailwindCSS for styling
- Implement lazy loading for components

### State Management

- Use local state for component-specific logic
- Use Zustand for shared/global state
- Avoid prop drilling

### API Integration

#### REST API
The application uses Axios for REST API calls. Available endpoints:

##### Available Instruments
Fetches available trading instruments:
```typescript
import { getAvailableInstruments } from '@/services/api/rest/service';

const response = await getAvailableInstruments({
  context: {
    app_id: 1001,
    account_type: 'real'
  }
});
// Returns: { instruments: [{ id: string, name: string }] }
```

General guidelines:
- Use Axios for HTTP requests
- Wrap API calls in service layers
- Handle errors gracefully
- Use environment-specific configurations from `src/config/api.ts`

### Import Paths

Use path aliases for better maintainability:

```typescript
// Instead of
import { TradeButton } from "../../components/TradeButton";

// Use
import { TradeButton } from "@/components/TradeButton";
```

### Version Control

Commit messages should follow the pattern:
```
<type>: concise description

- Detailed bullet points
- Additional context
```

Allowed types:
- feat: New features
- fix: Bug fixes
- refactor: Code changes that neither fix bugs nor add features
- docs: Documentation changes
- test: Test-related changes
- chore: Build process or auxiliary tool changes

## Building for Production

Build the project for release with:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.
