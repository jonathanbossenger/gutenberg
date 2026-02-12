# Footnotes

**Name:** `core/footnotes`  
**Category:** text  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display footnotes added to the page.

**Keywords:** `references`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":false,"color":false,"width":false,"style":false}`
- **color**:
  - background: `true`
  - link: `true`
  - text: `true`
  - _DefaultControls_ (experimental): `{"link":true,"text":true}`
- **html**: `false`
- **multiple**: `false`
- **reusable**: `false`
- **inserter**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `postId`
- `postType`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_footnotes()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:footnotes /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/footnotes/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/footnotes/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/footnotes/index.php)
