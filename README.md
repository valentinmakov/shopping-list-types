# shopping-list-types

Shared TypeScript types for the shopping list app and backend. Defines the WebSocket message contract and normalized state shape.

## Usage

This package is intended to be used as a git submodule in:

- `shopping-list-app`
- `shopping-list-backend`

### Build

```bash
yarn install
yarn build
```

### As dependency

In the consuming project's `package.json`:

```json
{
  "dependencies": {
    "shopping-list-types": "file:../shopping-list-types"
  }
}
```

Adjust the path to match where the submodule is cloned.
