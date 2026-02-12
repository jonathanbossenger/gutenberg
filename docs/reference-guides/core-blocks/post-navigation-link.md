# Post Navigation Link

**Name:** `core/post-navigation-link`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the next or previous post link that is adjacent to the current post.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `type` | `string` | `"next"` | — |
| `label` | `string` | — | Role: `content` |
| `showTitle` | `boolean` | `false` | — |
| `linkLabel` | `boolean` | `false` | — |
| `arrow` | `string` | `"none"` | — |
| `taxonomy` | `string` | `""` | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **color**:
  - link: `true`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postType`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_navigation_link()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-navigation-link {"type":"next","label":"Next Post"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-navigation-link/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-navigation-link/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-navigation-link/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-navigation-link/variations.js)
