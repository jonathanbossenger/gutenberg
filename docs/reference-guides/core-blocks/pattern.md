# Pattern Placeholder

**Name:** `core/pattern`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Show a block pattern.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `slug` | `string` | — | — |

## Supports

- **html**: `false`
- **inserter**: `false`
- **renaming**: `false`
- **visibility**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_pattern()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:pattern {"slug":"theme-name/pattern-slug"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pattern/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pattern/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pattern/index.php)
