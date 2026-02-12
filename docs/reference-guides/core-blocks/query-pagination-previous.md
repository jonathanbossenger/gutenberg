# Previous Page

**Name:** `core/query-pagination-previous`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the previous posts page link.

## Block Relationships

**Parent blocks (direct):**
- `core/query-pagination`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | `string` | — | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **color**:
  - gradients: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `queryId`
- `query`
- `paginationArrow`
- `showLabel`
- `enhancedPagination`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_query_pagination_previous()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:query-pagination-previous {"label":"Previous Page"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination-previous/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination-previous/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination-previous/index.php)
