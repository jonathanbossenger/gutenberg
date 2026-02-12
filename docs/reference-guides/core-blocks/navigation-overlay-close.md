# Navigation Overlay Close

**Name:** `core/navigation-overlay-close`  
**Category:** design  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> A customizable button to close overlays.

**Keywords:** `close`, `overlay`, `navigation`, `menu`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `displayMode` | `string` | `"icon"` | Enum: `icon`, `text`, `both` |
| `text` | `string` | — | — |

## Supports

- **color**:
  - gradients: `false`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - padding: `true`
  - _DefaultControls_ (experimental): `{"padding":true}`
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

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_navigation_overlay_close()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:navigation-overlay-close /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-overlay-close/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-overlay-close/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-overlay-close/index.php)
