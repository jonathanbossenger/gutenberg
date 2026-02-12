# Pattern

**Name:** `core/block`  
**Category:** reusable  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Reuse this design across your site.

**Keywords:** `reusable`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `ref` | `number` | — | — |
| `content` | `object` | `{}` | — |

## Supports

- **customClassName**: `false`
- **html**: `false`
- **inserter**: `false`
- **renaming**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Provides Context:**

- `pattern/overrides` → attribute `content`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_block()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:block {"ref":123} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/block/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/block/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/block/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/block/deprecated.js)
