# Accordion Panel

**Name:** `core/accordion-panel`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Contains the hidden or revealed content beneath the heading.

## Block Relationships

**Parent blocks (direct):**
- `core/accordion-item`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `templateLock` | `string \| boolean` | `false` | Enum: `all`, `insert`, `contentOnly`, `false` |

## Supports

- **html**: `false`
- **color**:
  - background: `true`
  - gradients: `true`
- **interactivity**: `true`
- **spacing**:
  - padding: `true`
  - blockGap: `true`
  - _DefaultControls_ (experimental): `{"padding":true,"blockGap":true}`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
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
- **shadow**: `true`
- **layout**:
  - allowEditing: `false`
- **visibility**: `false`
- **contentRole**: `true`
- **allowedBlocks**: `true`
- **lock**: `false`

## Context

**Uses Context:**

- `core/accordion-open-by-default`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	const blockProps = useBlockProps.save( {
		role: 'region',
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Panel content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-panel/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-panel/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/accordion-panel/edit.js)
