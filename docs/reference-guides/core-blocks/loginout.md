# Login/out

**Name:** `core/loginout`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Show login & logout links.

**Keywords:** `login`, `logout`, `form`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `displayLoginAsForm` | `boolean` | `false` | — |
| `redirectToCurrent` | `boolean` | `true` | — |

## Supports

- **anchor**: `true`
- **className**: `true`
- **color**:
  - background: `true`
  - text: `false`
  - gradients: `true`
  - link: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
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
- **interactivity**:
  - clientNavigation: `true`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_loginout()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:loginout {"displayLoginAsForm":false,"redirectToCurrent":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/loginout/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/loginout/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/loginout/index.php)
