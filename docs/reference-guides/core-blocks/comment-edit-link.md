# Comment Edit Link

**Name:** `core/comment-edit-link`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays a link to edit the comment in the WordPress Dashboard. This link is only visible to users with the edit comment capability.

## Block Relationships

**Ancestor blocks:**
- `core/comment-template`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `linkTarget` | `string` | `"_self"` | — |
| `textAlign` | `string` | — | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **color**:
  - link: `true`
  - gradients: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true,"link":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
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

## Context

**Uses Context:**

- `commentId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comment_edit_link()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comment-edit-link /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-edit-link/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-edit-link/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-edit-link/index.php)
