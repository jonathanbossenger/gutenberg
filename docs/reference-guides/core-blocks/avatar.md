# Avatar

**Name:** `core/avatar`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Add a user’s avatar.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `userId` | `number` | — | — |
| `size` | `number` | `96` | — |
| `isLink` | `boolean` | `false` | — |
| `linkTarget` | `string` | `"_self"` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **align**: `true`
- **alignWide**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **__experimentalBorder**:
  - _SkipSerialization_ (experimental): `true`
  - radius: `true`
  - width: `true`
  - color: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true}`
- **color**:
  - text: `false`
  - background: `false`
- **filter**:
  - duotone: `true`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postType`
- `postId`
- `commentId`

## CSS Selectors

- **border**: `.wp-block-avatar img`
- **filter**:
  - duotone: `.wp-block-avatar img`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_avatar()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:avatar {"size":96,"isLink":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/avatar/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/avatar/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/avatar/index.php)
