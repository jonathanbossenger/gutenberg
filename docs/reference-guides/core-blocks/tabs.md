# Tabs

**Name:** `core/tabs`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Display content in a tabbed interface to help users navigate detailed content with ease.

## Block Relationships

**Allowed inner blocks:**
- `core/tab`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `tabsId` | `string` | `""` | — |
| `orientation` | `string` | `"horizontal"` | Enum: `horizontal`, `vertical` |
| `activeTabIndex` | `number` | `0` | — |
| `tabInactiveColor` | `string` | — | — |
| `customTabInactiveColor` | `string` | — | — |
| `tabHoverColor` | `string` | — | — |
| `customTabHoverColor` | `string` | — | — |
| `tabActiveColor` | `string` | — | — |
| `customTabActiveColor` | `string` | — | — |
| `tabTextColor` | `string` | — | — |
| `customTabTextColor` | `string` | — | — |
| `tabActiveTextColor` | `string` | — | — |
| `customTabActiveTextColor` | `string` | — | — |
| `tabHoverTextColor` | `string` | — | — |
| `customTabHoverTextColor` | `string` | — | — |

## Supports

- **align**: `true`
- **color**:
  - text: `false`
  - background: `false`
- **html**: `false`
- **interactivity**: `true`
- **spacing**:
  - blockGap: `["horizontal","vertical"]`
  - margin: `true`
  - padding: `false`
- **typography**:
  - fontSize: `true`
  - _FontFamily_ (experimental): `true`
- **__experimentalBorder**:
  - radius: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"radius":true}`

## Context

**Provides Context:**

- `core/tabs-id` → attribute `tabsId`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `tab` | Tabs | Yes |
| `links` | Links | No |
| `button` | Button | No |

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	// eslint-disable-next-line react-compiler/react-compiler
	const blockProps = useBlockProps.save();

	// eslint-disable-next-line react-compiler/react-compiler
	const innerBlocksProps = useInnerBlocksProps.save( {} );

	const title = attributes?.metadata?.name || 'Tab Contents';

	return (
		<div { ...blockProps }>
			<h3 className="tabs__title">{ title }</h3>
			<ul className="tabs__list"></ul>
			{ innerBlocksProps.children }
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:tabs -->
<div class="wp-block-tabs"><!-- wp:tab {"label":"Tab 1"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab 1 content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab -->
<!-- wp:tab {"label":"Tab 2"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab 2 content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab --></div>
<!-- /wp:tabs -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tabs/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tabs/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tabs/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tabs/index.php)
