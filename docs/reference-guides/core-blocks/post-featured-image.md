# Featured Image

**Name:** `core/post-featured-image`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a post's featured image.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `isLink` | `boolean` | `false` | Role: `content` |
| `aspectRatio` | `string` | — | — |
| `width` | `string` | — | — |
| `height` | `string` | — | — |
| `scale` | `string` | `"cover"` | — |
| `sizeSlug` | `string` | — | — |
| `rel` | `string` | `""` | HTML attribute: `rel`. Role: `content` |
| `linkTarget` | `string` | `"_self"` | Role: `content` |
| `overlayColor` | `string` | — | — |
| `customOverlayColor` | `string` | — | — |
| `dimRatio` | `number` | `0` | — |
| `gradient` | `string` | — | — |
| `customGradient` | `string` | — | — |
| `useFirstImageFromPost` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `"left"`, `"right"`, `"center"`, `"wide"`, `"full"`
- **color**:
  - text: `false`
  - background: `false`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - width: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"width":true}`
- **filter**:
  - duotone: `true`
- **shadow**:
  - _SkipSerialization_ (experimental): `true`
- **html**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postId`
- `postType`
- `queryId`

## CSS Selectors

- **border**: `.wp-block-post-featured-image img, .wp-block-post-featured-image .block-editor-media-placeholder, .wp-block-post-featured-image .wp-block-post-featured-image__overlay`
- **shadow**: `.wp-block-post-featured-image img, .wp-block-post-featured-image .components-placeholder`
- **filter**:
  - duotone: `.wp-block-post-featured-image img, .wp-block-post-featured-image .wp-block-post-featured-image__placeholder, .wp-block-post-featured-image .components-placeholder__illustration, .wp-block-post-featured-image .components-placeholder::before`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_featured_image()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","width":"100%"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-featured-image/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-featured-image/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-featured-image/index.php)
