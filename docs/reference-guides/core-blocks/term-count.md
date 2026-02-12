# Term Count

**Name:** `core/term-count`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the post count of a taxonomy term.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `bracketType` | `string` | `"round"` | Enum: `none`, `round`, `square`, `curly`, `angle` |

## Supports

- **anchor**: `true`
- **html**: `false`
- **color**:
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
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
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `termId`
- `taxonomy`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_term_count()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:term-count /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-count/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-count/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/term-count/index.php)
