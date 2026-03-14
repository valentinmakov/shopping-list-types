# shopping-list-types

Shared TypeScript types for the shopping list app and backend. Defines the WebSocket message contract and normalized state shape.

## Usage

This repo is used as a git submodule. Clone it into your consumer's source tree (e.g. `src/shared-types/`) and import directly:

```typescript
import type { Product, ShoppingState } from './shared-types/src';
```

No build, no package.json—just plain `.ts` files.

## Consumers

- shopping-list-app
- shopping-list-backend
