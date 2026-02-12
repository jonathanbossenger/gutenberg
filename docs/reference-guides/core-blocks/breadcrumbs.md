# Breadcrumbs

**Name:** `core/breadcrumbs`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a breadcrumb trail showing the path to the current page.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `prefersTaxonomy` | `boolean` | `false` | — |
| `separator` | `string` | `"/"` | — |
| `showHomeItem` | `boolean` | `true` | — |
| `showCurrentItem` | `boolean` | `true` | — |
| `showOnHomePage` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **align**: `"wide"`, `"full"`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":false,"color":true,"width":true,"style":true}`
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

## Context

**Uses Context:**

- `postId`
- `postType`
- `templateSlug`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_breadcrumbs()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:breadcrumbs /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/breadcrumbs/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/breadcrumbs/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/breadcrumbs/index.php)
