# Buttons

**Name:** `core/buttons`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Prompt visitors to take action with a group of button-style links.

**Keywords:** `link`

## Block Relationships

**Allowed inner blocks:**
- `core/button`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **__experimentalExposeControlsToChildren**: `true`
- **color**:
  - gradients: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true}`
- **spacing**:
  - blockGap: `["horizontal","vertical"]`
  - padding: `true`
  - margin: `["top","bottom"]`
  - _DefaultControls_ (experimental): `{"blockGap":true}`
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
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **layout**:
  - allowSwitching: `false`
  - allowInheriting: `false`
  - default: `{"type":"flex"}`
- **interactivity**:
  - clientNavigation: `true`
- **listView**: `true`
- **contentRole**: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes, className } ) {
	const { fontSize, style } = attributes;
	const blockProps = useBlockProps.save( {
		className: clsx( className, {
			'has-custom-font-size': fontSize || style?.typography?.fontSize,
		} ),
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/buttons/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/buttons/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/buttons/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/buttons/deprecated.js)
