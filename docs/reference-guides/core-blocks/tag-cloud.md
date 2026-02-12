# Tag Cloud

**Name:** `core/tag-cloud`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> A cloud of popular keywords, each sized by how often it appears.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `numberOfTags` | `number` | `45` | — |
| `taxonomy` | `string` | `"post_tag"` | — |
| `showTagCounts` | `boolean` | `false` | — |
| `smallestFontSize` | `string` | `"8pt"` | — |
| `largestFontSize` | `string` | `"22pt"` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **align**: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **typography**:
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `outline` | Outline | No |

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_tag_cloud()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:tag-cloud {"numberOfTags":45,"showTagCounts":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tag-cloud/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tag-cloud/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tag-cloud/index.php)
