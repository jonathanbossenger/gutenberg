# Details

**Name:** `core/details`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Hide and show additional content.

**Keywords:** `summary`, `toggle`, `disclosure`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `showContent` | `boolean` | `false` | — |
| `summary` | `rich-text` | — | Source: `rich-text`. Selector: `summary`. Role: `content` |
| `name` | `string` | — | Source: `attribute`. Selector: `.wp-block-details`. HTML attribute: `name` |
| `placeholder` | `string` | — | — |

## Supports

- **__experimentalOnEnter**: `true`
- **align**: `"wide"`, `"full"`
- **anchor**: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **__experimentalBorder**:
  - color: `true`
  - width: `true`
  - style: `true`
- **html**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - blockGap: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
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
- **layout**:
  - allowEditing: `false`
- **interactivity**:
  - clientNavigation: `true`
- **allowedBlocks**: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { name, showContent } = attributes;
	const summary = attributes.summary ? attributes.summary : 'Details';
	const blockProps = useBlockProps.save();

	return (
		<details
			{ ...blockProps }
			name={ name || undefined }
			open={ showContent }
		>
			<summary>
				<RichText.Content value={ summary } />
			</summary>
			<InnerBlocks.Content />
		</details>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:details -->
<details class="wp-block-details"><summary>Summary text</summary><!-- wp:paragraph -->
<p>Details content</p>
<!-- /wp:paragraph --></details>
<!-- /wp:details -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/details/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/details/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/details/edit.js)
