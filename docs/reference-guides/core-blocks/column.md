# Column

**Name:** `core/column`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> A single column within a columns block.

## Block Relationships

**Parent blocks (direct):**
- `core/columns`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `verticalAlignment` | `string` | — | — |
| `width` | `string` | — | — |
| `templateLock` | `string \| boolean` | — | Enum: `all`, `insert`, `contentOnly`, `false` |

## Supports

- **__experimentalOnEnter**: `true`
- **anchor**: `true`
- **reusable**: `false`
- **html**: `false`
- **color**:
  - gradients: `true`
  - heading: `true`
  - button: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **shadow**: `true`
- **spacing**:
  - blockGap: `true`
  - padding: `true`
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
- **layout**: `true`
- **interactivity**:
  - clientNavigation: `true`
- **allowedBlocks**: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { verticalAlignment, width } = attributes;

	const wrapperClasses = clsx( {
		[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
	} );

	let style;

	if ( width && /\d/.test( width ) ) {
		// Numbers are handled for backward compatibility as they can be still provided with templates.
		let flexBasis = Number.isFinite( width ) ? width + '%' : width;
		// In some cases we need to round the width to a shorter float.
		if ( ! Number.isFinite( width ) && width?.endsWith( '%' ) ) {
			const multiplier = 1000000000000;
			// Shrink the number back to a reasonable float.
			flexBasis =
				Math.round( Number.parseFloat( width ) * multiplier ) /
					multiplier +
				'%';
		}
		style = { flexBasis };
	}

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
		style,
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p>Column content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/column/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/column/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/column/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/column/deprecated.js)
