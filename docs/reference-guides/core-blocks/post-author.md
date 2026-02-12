# Author

**Name:** `core/post-author`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display post author details such as name, avatar, and bio.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `avatarSize` | `number` | `48` | — |
| `showAvatar` | `boolean` | `true` | — |
| `showBio` | `boolean` | — | — |
| `byline` | `string` | — | — |
| `isLink` | `boolean` | `false` | Role: `content` |
| `linkTarget` | `string` | `"_self"` | Role: `content` |

## Supports

- **anchor**: `true`
- **html**: `false`
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
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`
- **filter**:
  - duotone: `true`

## Context

**Uses Context:**

- `postType`
- `postId`
- `queryId`

## CSS Selectors

- **filter**:
  - duotone: `.wp-block-post-author .wp-block-post-author__avatar img`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_author()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-author {"showAvatar":true,"showBio":true,"avatarSize":48} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-author/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-author/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-author/index.php)
