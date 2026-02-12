# Excerpt

**Name:** `core/post-excerpt`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display the excerpt.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `moreText` | `string` | — | Role: `content` |
| `showMoreOnNewLine` | `boolean` | `true` | — |
| `excerptLength` | `number` | `55` | — |

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

**Render function:** `render_block_core_post_excerpt()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-excerpt {"moreText":"Read more","showMoreOnNewLine":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-excerpt/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-excerpt/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-excerpt/index.php)
