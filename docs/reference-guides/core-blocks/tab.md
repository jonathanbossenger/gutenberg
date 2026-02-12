# Tab

**Name:** `core/tab`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Content for a tab in a tabbed interface.

## Block Relationships

**Parent blocks (direct):**
- `core/tabs`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | `string` | `""` | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **reusable**: `false`
- **layout**:
  - allowSwitching: `true`
  - allowInheriting: `false`
  - allowVerticalAlignment: `true`
  - allowJustification: `true`
  - allowOrientation: `true`
  - allowSizingOnChildren: `true`
- **spacing**:
  - blockGap: `true`
  - padding: `true`
  - margin: `false`
- **typography**:
  - fontSize: `true`
  - _FontFamily_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true,"__experimentalFontFamily":true}`
  - _SkipSerialization_ (experimental): `true`

## Context

**Provides Context:**

- `core/tab-label` → attribute `label`

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
	const { anchor } = attributes;

	const tabPanelId = anchor;

	// eslint-disable-next-line react-compiler/react-compiler
	const blockProps = useBlockProps.save();
	// eslint-disable-next-line react-compiler/react-compiler
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <section { ...innerBlocksProps } id={ tabPanelId } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:tab {"label":"Tab Label"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tab/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tab/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tab/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/tab/index.php)
