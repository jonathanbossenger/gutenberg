# Submenu

**Name:** `core/navigation-submenu`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Add a submenu to your navigation.

## Block Relationships

**Parent blocks (direct):**
- `core/navigation`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | `string` | — | Role: `content` |
| `type` | `string` | — | — |
| `description` | `string` | — | — |
| `rel` | `string` | — | — |
| `id` | `number` | — | — |
| `opensInNewTab` | `boolean` | `false` | — |
| `url` | `string` | — | Role: `content` |
| `title` | `string` | — | — |
| `kind` | `string` | — | — |
| `isTopLevelItem` | `boolean` | — | — |

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
- `overlayTextColor`
- `customOverlayTextColor`
- `overlayBackgroundColor`
- `customOverlayBackgroundColor`
- `fontSize`
- `customFontSize`
- `showSubmenuIcon`
- `maxNestingLevel`
- `openSubmenusOnClick`
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
<!-- wp:navigation-submenu {"label":"Services","url":"/services/"} -->
<!-- wp:navigation-link {"label":"Web Design","url":"/services/web-design/"} /-->
<!-- wp:navigation-link {"label":"Development","url":"/services/development/"} /-->
<!-- /wp:navigation-submenu -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-submenu/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-submenu/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-submenu/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-submenu/index.php)
