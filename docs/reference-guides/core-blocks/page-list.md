# Page List

**Name:** `core/page-list`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a list of all pages.

**Keywords:** `menu`, `navigation`

## Block Relationships

**Allowed inner blocks:**
- `core/page-list-item`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `parentPageID` | `integer` | `0` | — |
| `isNested` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
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
- **color**:
  - text: `true`
  - background: `true`
  - link: `true`
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
- **spacing**:
  - padding: `true`
  - margin: `true`
  - _DefaultControls_ (experimental): `{"padding":false,"margin":false}`
- **contentRole**: `true`

## Context

**Uses Context:**

- `textColor`
- `customTextColor`
- `backgroundColor`
- `customBackgroundColor`
- `overlayTextColor`
- `customOverlayTextColor`
- `overlayBackgroundColor`
- `customOverlayBackgroundColor`
- `fontSize`
- `customFontSize`
- `showSubmenuIcon`
- `style`
- `openSubmenusOnClick`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `block_core_page_list_build_css_colors()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:page-list /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/page-list/index.php)
