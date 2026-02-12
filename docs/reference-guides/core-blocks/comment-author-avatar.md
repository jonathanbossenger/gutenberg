# Comment Author Avatar (deprecated)

**Name:** `core/comment-author-avatar`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> This block is deprecated. Please use the Avatar block instead.

## Block Relationships

**Ancestor blocks:**
- `core/comment-template`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `width` | `number` | `96` | — |
| `height` | `number` | `96` | — |

## Supports

- **html**: `false`
- **inserter**: `false`
- **__experimentalBorder**:
  - radius: `true`
  - width: `true`
  - color: `true`
  - style: `true`
- **color**:
  - background: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true}`
- **spacing**:
  - _SkipSerialization_ (experimental): `true`
  - margin: `true`
  - padding: `true`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `commentId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comment_author_avatar()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comment-author-avatar {"width":48,"height":48} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-avatar/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-avatar/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-avatar/index.php)
