# Social Icon

**Name:** `core/social-link`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display an icon linking to a social profile or site.

## Block Relationships

**Parent blocks (direct):**
- `core/social-links`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `url` | `string` | — | Role: `content` |
| `service` | `string` | — | — |
| `label` | `string` | — | Role: `content` |
| `rel` | `string` | — | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `openInNewTab`
- `showLabels`
- `iconColor`
- `iconColorValue`
- `iconBackgroundColor`
- `iconBackgroundColorValue`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_social_link()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:social-link {"url":"https://twitter.com/example","service":"twitter"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-link/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-link/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-link/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/social-link/variations.js)
