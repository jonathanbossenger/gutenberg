# Custom Link

**Name:** `core/navigation-link`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Add a page, link, or another item to your navigation.

## Block Relationships

**Parent blocks (direct):**
- `core/navigation`

**Allowed inner blocks:**
- `core/navigation-link`
- `core/navigation-submenu`
- `core/page-list`

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
| `isTopLevelLink` | `boolean` | — | — |

## Supports

- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **__experimentalSlashInserter**: `true`
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
- **renaming**: `false`
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
<!-- wp:navigation-link {"label":"About","url":"/about/","kind":"post-type","isTopLevelLink":true} /-->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-link/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-link/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-link/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/navigation-link/index.php)
