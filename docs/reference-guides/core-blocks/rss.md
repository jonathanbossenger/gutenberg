# RSS

**Name:** `core/rss`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display entries from any RSS or Atom feed.

**Keywords:** `atom`, `feed`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `columns` | `number` | `2` | — |
| `blockLayout` | `string` | `"list"` | — |
| `feedURL` | `string` | `""` | Role: `content` |
| `itemsToShow` | `number` | `5` | — |
| `displayExcerpt` | `boolean` | `false` | — |
| `displayAuthor` | `boolean` | `false` | — |
| `displayDate` | `boolean` | `false` | — |
| `excerptLength` | `number` | `55` | — |
| `openInNewTab` | `boolean` | `false` | — |
| `rel` | `string` | — | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"padding":false,"margin":false}`
- **color**:
  - background: `true`
  - text: `true`
  - gradients: `true`
  - link: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_rss()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:rss {"feedURL":"https://example.com/feed/","itemsToShow":5,"displayExcerpt":true,"displayDate":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/rss/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/rss/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/rss/index.php)
