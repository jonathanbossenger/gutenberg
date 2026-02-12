# Page List Item

**Name:** `core/page-list-item`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays a page inside a list of all pages.

**Keywords:** `page`, `menu`, `navigation`

## Block Relationships

**Parent blocks (direct):**
- `core/page-list`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | `number` | — | — |
| `label` | `string` | — | — |
| `title` | `string` | — | — |
| `link` | `string` | — | — |
| `hasChildren` | `boolean` | — | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **lock**: `false`
- **inserter**: `false`
- **__experimentalToolbar**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `textColor`
- `customTextColor`
- `backgroundColor`
- `customBackgroundColor`
- `overlayTextColor`
- `customOverlayTextColor`
- `overlayBackgroundColor`
- `customOverlayBackgroundColor`
- `fontSize`
- `customFontSize`
- `showSubmenuIcon`
- `style`
- `openSubmenusOnClick`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:page-list-item {"id":42,"label":"About","link":"https://example.com/about/"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list-item/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list-item/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list-item/index.php)
