# Template Part

**Name:** `core/template-part`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Edit the different global regions of your site, like the header, footer, sidebar, or create your own.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `slug` | `string` | — | — |
| `theme` | `string` | — | — |
| `tagName` | `string` | — | — |
| `area` | `string` | — | — |

## Supports

- **align**: `true`
- **html**: `false`
- **reusable**: `false`
- **renaming**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_template_part()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:template-part {"slug":"header","area":"header","tagName":"header"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/template-part/block.json)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/template-part/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/template-part/variations.js)
