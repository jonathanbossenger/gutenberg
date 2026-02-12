# Navigation

**Name:** `core/navigation`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> A collection of blocks that allow visitors to get around your site.

**Keywords:** `menu`, `navigation`, `links`

## Block Relationships

**Allowed inner blocks:**
- `core/navigation-link`
- `core/search`
- `core/social-links`
- `core/page-list`
- `core/spacer`
- `core/home-link`
- `core/site-title`
- `core/site-logo`
- `core/navigation-submenu`
- `core/loginout`
- `core/buttons`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `ref` | `number` | — | — |
| `textColor` | `string` | — | — |
| `customTextColor` | `string` | — | — |
| `rgbTextColor` | `string` | — | — |
| `backgroundColor` | `string` | — | — |
| `customBackgroundColor` | `string` | — | — |
| `rgbBackgroundColor` | `string` | — | — |
| `showSubmenuIcon` | `boolean` | `true` | — |
| `openSubmenusOnClick` | `boolean` | `false` | — |
| `overlayMenu` | `string` | `"mobile"` | — |
| `overlay` | `string` | — | — |
| `icon` | `string` | `"handle"` | — |
| `hasIcon` | `boolean` | `true` | — |
| `__unstableLocation` | `string` | — | — |
| `overlayBackgroundColor` | `string` | — | — |
| `customOverlayBackgroundColor` | `string` | — | — |
| `overlayTextColor` | `string` | — | — |
| `customOverlayTextColor` | `string` | — | — |
| `maxNestingLevel` | `number` | `5` | — |
| `templateLock` | `string \| boolean` | — | Enum: `all`, `insert`, `contentOnly`, `false` |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **ariaLabel**: `true`
- **contentRole**: `true`
- **html**: `false`
- **inserter**: `true`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _FontFamily_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _SkipSerialization_ (experimental): `["textDecoration"]`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **spacing**:
  - blockGap: `true`
  - units: `["px","em","rem","vh","vw"]`
  - _DefaultControls_ (experimental): `{"blockGap":true}`
- **layout**:
  - allowSwitching: `false`
  - allowInheriting: `false`
  - allowVerticalAlignment: `false`
  - allowSizingOnChildren: `true`
  - default: `{"type":"flex"}`
- **interactivity**: `true`
- **renaming**: `false`

## Context

**Provides Context:**

- `textColor` → attribute `textColor`
- `customTextColor` → attribute `customTextColor`
- `backgroundColor` → attribute `backgroundColor`
- `customBackgroundColor` → attribute `customBackgroundColor`
- `overlayTextColor` → attribute `overlayTextColor`
- `customOverlayTextColor` → attribute `customOverlayTextColor`
- `overlayBackgroundColor` → attribute `overlayBackgroundColor`
- `customOverlayBackgroundColor` → attribute `customOverlayBackgroundColor`
- `fontSize` → attribute `fontSize`
- `customFontSize` → attribute `customFontSize`
- `showSubmenuIcon` → attribute `showSubmenuIcon`
- `openSubmenusOnClick` → attribute `openSubmenusOnClick`
- `style` → attribute `style`
- `maxNestingLevel` → attribute `maxNestingLevel`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	if ( attributes.ref ) {
		// Avoid rendering inner blocks when a ref is defined.
		// When this id is defined the inner blocks are loaded from the
		// `wp_navigation` entity rather than the hard-coded block html.
		return;
	}
	return <InnerBlocks.Content />;
}
```

</details>

**Example post content:**

```html
<!-- wp:navigation {"ref":123} /-->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation/save.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation/deprecated.js)
