# Comment Author Name

**Name:** `core/comment-author-name`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the name of the author of the comment.

## Block Relationships

**Ancestor blocks:**
- `core/comment-template`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `isLink` | `boolean` | `true` | — |
| `linkTarget` | `string` | `"_self"` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
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

- `commentId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_comment_author_name()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:comment-author-name {"isLink":true,"linkTarget":"_self"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-name/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-name/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-name/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-author-name/deprecated.js)
