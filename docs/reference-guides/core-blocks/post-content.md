# Content

**Name:** `core/post-content`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the contents of a post or page.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `tagName` | `string` | `"div"` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **layout**: `true`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **dimensions**:
  - minHeight: `true`
- **spacing**:
  - blockGap: `true`
  - padding: `true`
  - margin: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **color**:
  - gradients: `true`
  - heading: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":false,"text":false}`
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
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `postId`
- `postType`
- `queryId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_content()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-content/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-content/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-content/index.php)
