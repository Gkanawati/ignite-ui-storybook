# Ignite UI

A React component library and design system built with [Stitches](https://stitches.dev/), [Radix UI](https://www.radix-ui.com/) primitives, and a centralized design token system. Organized as a monorepo using [Turborepo](https://turbo.build/).

[Storybook Documentation](https://gkanawati.github.io/ignite-ui-storybook/)

## Packages

| Package                                                   | Version | Description                                       |
| --------------------------------------------------------- | ------- | ------------------------------------------------- |
| [`@ignite-ui-gk/react`](./packages/react)                 | 2.0.1   | React component library                           |
| [`@ignite-ui-gk/tokens`](./packages/tokens)               | 2.1.0   | Design tokens (colors, spacing, typography, etc.) |
| [`@ignite-ui-gk/docs`](./packages/docs)                   | -       | Storybook documentation site                      |
| [`@ignite-ui-gk/ts-config`](./packages/ts-config)         | -       | Shared TypeScript configurations                  |
| [`@ignite-ui-gk/eslint-config`](./packages/eslint-config) | -       | Shared ESLint configuration                       |

## Components

- [x] Text
- [x] Heading
- [x] Box
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Avatar
- [x] MultiStep
- [x] Tooltip
- [x] Toast

## Installation

```bash
npm install @ignite-ui-gk/react @ignite-ui-gk/tokens
```

## Usage

```tsx
import { Button, TextInput } from '@ignite-ui-gk/react';

function App() {
  return (
    <div>
      <TextInput placeholder='Type something...' />
      <Button>Submit</Button>
    </div>
  );
}
```

## Development

### Prerequisites

- Node.js 18+
- npm 10+

### Setup

```bash
# Install dependencies
npm install

# Start all packages in dev mode (Storybook on port 6006)
npm run dev
```

### Scripts

| Command                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| `npm run dev`              | Start dev mode for all packages in parallel |
| `npm run build`            | Build all packages                          |
| `npm run changeset`        | Create a new changeset                      |
| `npm run version-packages` | Version packages from changesets            |
| `npm run release`          | Build and publish packages to npm           |

## Tech Stack

- **React** 18
- **TypeScript**
- **Stitches** - CSS-in-JS styling
- **Radix UI** - Accessible component primitives (Avatar, Checkbox, Toast, Tooltip)
- **Phosphor Icons** - Icon set
- **tsup** - Library bundling
- **Turborepo** - Monorepo orchestration
- **Storybook** 8 - Component documentation and playground
- **Changesets** - Version management and npm publishing
