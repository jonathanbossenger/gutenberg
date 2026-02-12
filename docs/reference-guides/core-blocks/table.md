# Table

**Name:** `core/table`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Create structured content in rows and columns to display information.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `hasFixedLayout` | `boolean` | `true` | — |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `figcaption`. Role: `content` |
| `head` | `array` | `[]` | Source: `query`. Selector: `thead tr` |
| `body` | `array` | `[]` | Source: `query`. Selector: `tbody tr` |
| `foot` | `array` | `[]` | Source: `query`. Selector: `tfoot tr` |

## Supports

- **anchor**: `true`
- **align**: `true`
- **color**:
  - _SkipSerialization_ (experimental): `true`
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **__experimentalBorder**:
  - _SkipSerialization_ (experimental): `true`
  - color: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"style":true,"width":true}`
- **interactivity**:
  - clientNavigation: `true`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `regular` | Default | Yes |
| `stripes` | Stripes | No |

## CSS Selectors

- **root**: `.wp-block-table > table`
- **spacing**: `.wp-block-table`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { hasFixedLayout, head, body, foot, caption } = attributes;
	const isEmpty = ! head.length && ! body.length && ! foot.length;

	if ( isEmpty ) {
		return null;
	}

	const colorProps = getColorClassesAndStyles( attributes );
	const borderProps = getBorderClassesAndStyles( attributes );

	const classes = clsx( colorProps.className, borderProps.className, {
		'has-fixed-layout': hasFixedLayout,
	} );

	const hasCaption = ! RichText.isEmpty( caption );

	const Section = ( { type, rows } ) => {
		if ( ! rows.length ) {
			return null;
		}

		const Tag = `t${ type }`;

		return (
			<Tag>
				{ rows.map( ( { cells }, rowIndex ) => (
					<tr key={ rowIndex }>
						{ cells.map(
							(
								{
									content,
									tag,
									scope,
									align,
									colspan,
									rowspan,
								},
								cellIndex
							) => {
								const cellClasses = clsx( {
									[ `has-text-align-${ align }` ]: align,
								} );

								return (
									<RichText.Content
										className={
											cellClasses
												? cellClasses
												: undefined
										}
										data-align={ align }
										tagName={ tag }
										value={ content }
										key={ cellIndex }
										scope={
											tag === 'th' ? scope : undefined
										}
										colSpan={ colspan }
										rowSpan={ rowspan }
									/>
								);
							}
						) }
					</tr>
				) ) }
			</Tag>
		);
	};

	return (
		<figure { ...useBlockProps.save() }>
			<table
				className={ classes === '' ? undefined : classes }
				style={ { ...colorProps.style, ...borderProps.style } }
			>
				<Section type="head" rows={ head } />
				<Section type="body" rows={ body } />
				<Section type="foot" rows={ foot } />
			</table>
			{ hasCaption && (
				<RichText.Content
					tagName="figcaption"
					value={ caption }
					className={ __experimentalGetElementClassName( 'caption' ) }
				/>
			) }
		</figure>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table></figure>
<!-- /wp:table -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table/deprecated.js)
