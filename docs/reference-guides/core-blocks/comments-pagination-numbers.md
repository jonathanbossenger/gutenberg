# Comments Page Numbers

**Name:** `core/comments-pagination-numbers`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays a list of page numbers for comments pagination.

## Block Relationships

**Parent blocks (direct):**
- `core/comments-pagination`

## Attributes

_This block has no custom attributes._

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
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"padding":true}`

## Context

**Uses Context:**

- `postId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comments_pagination_numbers()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comments-pagination-numbers /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination-numbers/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination-numbers/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination-numbers/index.php)
