# Calendar

**Name:** `core/calendar`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> A calendar of your site’s posts.

**Keywords:** `posts`, `archive`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `month` | `integer` | — | — |
| `year` | `integer` | — | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
- **color**:
  - link: `true`
  - _SkipSerialization_ (experimental): `["text","background"]`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
  - _Selector_ (experimental): `table, th`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_calendar()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:calendar /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/calendar/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/calendar/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/calendar/index.php)
