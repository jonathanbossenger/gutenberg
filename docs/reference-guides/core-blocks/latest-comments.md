# Latest Comments

**Name:** `core/latest-comments`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a list of your most recent comments.

**Keywords:** `recent comments`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `commentsToShow` | `number` | `5` | — |
| `displayAvatar` | `boolean` | `true` | — |
| `displayDate` | `boolean` | `true` | — |
| `displayContent` | `string` | `"excerpt"` | Enum: `none`, `excerpt`, `full` |

## Supports

- **anchor**: `true`
- **align**: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
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
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_latest_comments()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:latest-comments {"commentsToShow":5,"displayAvatar":true,"displayDate":true,"displayExcerpt":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-comments/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-comments/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-comments/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/latest-comments/deprecated.js)
