# Terms List

**Name:** `core/categories`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display a list of all terms of a given taxonomy.

**Keywords:** `categories`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `taxonomy` | `string` | `"category"` | — |
| `displayAsDropdown` | `boolean` | `false` | — |
| `showHierarchy` | `boolean` | `false` | — |
| `showPostCounts` | `boolean` | `false` | — |
| `showOnlyTopLevel` | `boolean` | `false` | — |
| `showEmpty` | `boolean` | `false` | — |
| `label` | `string` | — | Role: `content` |
| `showLabel` | `boolean` | `true` | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
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
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `enhancedPagination`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_categories()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:categories {"displayAsDropdown":false,"showHierarchy":true,"showPostCounts":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/categories/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/categories/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/categories/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/categories/variations.js)
