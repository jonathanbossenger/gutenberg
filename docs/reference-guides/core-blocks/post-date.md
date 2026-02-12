# Date

**Name:** `core/post-date`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a custom date.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `datetime` | `string` | — | Role: `content` |
| `textAlign` | `string` | — | — |
| `format` | `string` | — | — |
| `isLink` | `boolean` | `false` | Role: `content` |

## Supports

- **anchor**: `true`
- **html**: `false`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
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
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `postId`
- `postType`
- `queryId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_date()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-date {"format":"F j, Y"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-date/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-date/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-date/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-date/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-date/variations.js)
