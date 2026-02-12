# Home Link

**Name:** `core/home-link`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Create a link that always points to the homepage of the site. Usually not necessary if there is already a site title link present in the header.

## Block Relationships

**Parent blocks (direct):**
- `core/navigation`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | `string` | — | Role: `content` |

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

## Context

**Uses Context:**

- `textColor`
- `customTextColor`
- `backgroundColor`
- `customBackgroundColor`
- `fontSize`
- `customFontSize`
- `style`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	return <InnerBlocks.Content />;
}
```

</details>

**Example post content:**

```html
<!-- wp:home-link {"label":"Home"} /-->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/home-link/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/home-link/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/home-link/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/home-link/index.php)
