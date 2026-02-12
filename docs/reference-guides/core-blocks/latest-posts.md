# Latest Posts

**Name:** `core/latest-posts`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a list of your most recent posts.

**Keywords:** `recent posts`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `categories` | `array` | — | — |
| `selectedAuthor` | `number` | — | — |
| `postsToShow` | `number` | `5` | — |
| `displayPostContent` | `boolean` | `false` | — |
| `displayPostContentRadio` | `string` | `"excerpt"` | — |
| `excerptLength` | `number` | `55` | — |
| `displayAuthor` | `boolean` | `false` | — |
| `displayPostDate` | `boolean` | `false` | — |
| `postLayout` | `string` | `"list"` | — |
| `columns` | `number` | `3` | — |
| `order` | `string` | `"desc"` | — |
| `orderBy` | `string` | `"date"` | — |
| `displayFeaturedImage` | `boolean` | `false` | — |
| `featuredImageAlign` | `string` | — | Enum: `left`, `center`, `right` |
| `featuredImageSizeSlug` | `string` | `"thumbnail"` | — |
| `featuredImageSizeWidth` | `number` | `null` | — |
| `featuredImageSizeHeight` | `number` | `null` | — |
| `addLinkToFeaturedImage` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `true`
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
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_latest_posts()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:latest-posts {"postsToShow":5,"displayPostDate":true,"displayFeaturedImage":false} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-posts/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-posts/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-posts/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-posts/deprecated.js)
