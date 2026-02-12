# Comment Content

**Name:** `core/comment-content`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the contents of a comment.

## Block Relationships

**Ancestor blocks:**
- `core/comment-template`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - textAlign: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`
- **spacing**:
  - padding: `["horizontal","vertical"]`
  - _DefaultControls_ (experimental): `{"padding":true}`
- **html**: `false`

## Context

**Uses Context:**

- `commentId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comment_content()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comment-content /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-content/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-content/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-content/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-content/deprecated.js)
