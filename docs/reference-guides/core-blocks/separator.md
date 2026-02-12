# Separator

**Name:** `core/separator`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Create a break between ideas or sections with a horizontal separator.

**Keywords:** `horizontal-line`, `hr`, `divider`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `opacity` | `string` | `"alpha-channel"` | — |
| `tagName` | `string` | `"hr"` | Enum: `hr`, `div` |

## Supports

- **anchor**: `true`
- **align**: `"center"`, `"wide"`, `"full"`
- **color**:
  - enableContrastChecker: `false`
  - _SkipSerialization_ (experimental): `true`
  - gradients: `true`
  - background: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true}`
- **spacing**:
  - margin: `["top","bottom"]`
- **interactivity**:
  - clientNavigation: `true`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `wide` | Wide Line | No |
| `dots` | Dots | No |

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import {
	getColorClassName,
	useBlockProps,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';

export default function separatorSave( { attributes } ) {
	const { backgroundColor, style, opacity, tagName: Tag } = attributes;
	const customColor = style?.color?.background;
	const colorProps = getColorClassesAndStyles( attributes );
	// The hr support changing color using border-color, since border-color
	// is not yet supported in the color palette, we use background-color.

	// The dots styles uses text for the dots, to change those dots color is
	// using color, not backgroundColor.
	const colorClass = getColorClassName( 'color', backgroundColor );

	const className = clsx(
		{
			'has-text-color': backgroundColor || customColor,
			[ colorClass ]: colorClass,
			'has-css-opacity': opacity === 'css',
			'has-alpha-channel-opacity': opacity === 'alpha-channel',
		},
		colorProps.className
	);

	const styles = {
		backgroundColor: colorProps?.style?.backgroundColor,
		color: colorClass ? undefined : customColor,
	};
	return <Tag { ...useBlockProps.save( { className, style: styles } ) } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/separator/deprecated.js)
