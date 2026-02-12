# Search

**Name:** `core/search`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Help visitors find your content.

**Keywords:** `find`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | `string` | — | Role: `content` |
| `showLabel` | `boolean` | `true` | — |
| `placeholder` | `string` | `""` | Role: `content` |
| `width` | `number` | — | — |
| `widthUnit` | `string` | — | — |
| `buttonText` | `string` | — | Role: `content` |
| `buttonPosition` | `string` | `"button-outside"` | — |
| `buttonUseIcon` | `boolean` | `false` | — |
| `query` | `object` | `{}` | — |
| `isSearchFieldHidden` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `"left"`, `"center"`, `"right"`
- **color**:
  - gradients: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **interactivity**: `true`
- **typography**:
  - _SkipSerialization_ (experimental): `true`
  - _Selector_ (experimental): `.wp-block-search__label, .wp-block-search__input, .wp-block-search__button`
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
  - color: `true`
  - radius: `true`
  - width: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"width":true}`
- **spacing**:
  - margin: `true`
- **html**: `false`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_search()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:search {"label":"Search","placeholder":"Search...","buttonText":"Search"} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/search/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/search/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/search/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/search/variations.js)
