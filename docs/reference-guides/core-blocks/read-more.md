# Read More

**Name:** `core/read-more`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the link of a post, page, or any other content-type.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `string` | — | Role: `content` |
| `linkTarget` | `string` | `"_self"` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **color**:
  - gradients: `true`
  - text: `true`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true,"textDecoration":true}`
- **spacing**:
  - margin: `["top","bottom"]`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"padding":true}`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"width":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_read_more()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:read-more {"content":"Continue reading"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/read-more/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/read-more/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/read-more/index.php)
