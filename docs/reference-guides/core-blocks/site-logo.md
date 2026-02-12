# Site Logo

**Name:** `core/site-logo`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Display an image to represent this site. Update this block and the changes apply everywhere.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `width` | `number` | — | — |
| `isLink` | `boolean` | `true` | Role: `content` |
| `linkTarget` | `string` | `"_self"` | Role: `content` |
| `shouldSyncIcon` | `boolean` | — | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **align**: `true`
- **alignWide**: `false`
- **color**:
  - text: `false`
  - background: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **interactivity**:
  - clientNavigation: `true`
- **filter**:
  - duotone: `true`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `rounded` | Rounded | No |

## CSS Selectors

- **filter**:
  - duotone: `.wp-block-site-logo img, .wp-block-site-logo .components-placeholder__illustration, .wp-block-site-logo .components-placeholder::before`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_site_logo()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:site-logo {"width":120,"isLink":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-logo/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-logo/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/site-logo/index.php)
