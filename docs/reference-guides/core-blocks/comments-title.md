# Comments Title

**Name:** `core/comments-title`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays a title with the number of comments.

## Block Relationships

**Ancestor blocks:**
- `core/comments`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `showPostTitle` | `boolean` | `true` | — |
| `showCommentsCount` | `boolean` | `true` | — |
| `level` | `number` | `2` | — |
| `levelOptions` | `array` | — | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
- **color**:
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
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
  - _DefaultControls_ (experimental): `{"fontSize":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postId`
- `postType`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comments_title()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comments-title {"showPostTitle":true,"showCommentsCount":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-title/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-title/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-title/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-title/deprecated.js)
