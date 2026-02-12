# Site Tagline

**Name:** `core/site-tagline`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Describe in a few words what this site is about. This is important for search results, sharing on social media, and gives overall clarity to visitors.

**Keywords:** `description`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `level` | `number` | `0` | — |
| `levelOptions` | `array` | `[0,1,2,3,4,5,6]` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **color**:
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **contentRole**: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_site_tagline()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:site-tagline /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-tagline/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-tagline/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-tagline/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-tagline/deprecated.js)
