# Gallery

**Name:** `core/gallery`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Display multiple images in a rich gallery.

**Keywords:** `images`, `photos`

## Block Relationships

**Allowed inner blocks:**
- `core/image`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `images` | `array` | `[]` | Source: `query`. Selector: `.blocks-gallery-item` |
| `ids` | `array` | `[]` | — |
| `shortCodeTransforms` | `array` | `[]` | — |
| `columns` | `number` | — | — |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `.blocks-gallery-caption`. Role: `content` |
| `imageCrop` | `boolean` | `true` | — |
| `randomOrder` | `boolean` | `false` | — |
| `fixedHeight` | `boolean` | `true` | — |
| `linkTarget` | `string` | — | — |
| `linkTo` | `string` | — | — |
| `sizeSlug` | `string` | `"large"` | — |
| `allowResize` | `boolean` | `false` | — |
| `aspectRatio` | `string` | `"auto"` | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true}`
- **html**: `false`
- **units**: `"px"`, `"em"`, `"rem"`, `"vh"`, `"vw"`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - blockGap: `["horizontal","vertical"]`
  - _SkipSerialization_ (experimental): `["blockGap"]`
  - _DefaultControls_ (experimental): `{"blockGap":true,"margin":false,"padding":false}`
- **color**:
  - text: `false`
  - background: `true`
  - gradients: `true`
- **layout**:
  - allowSwitching: `false`
  - allowInheriting: `false`
  - allowEditing: `false`
  - default: `{"type":"flex"}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Provides Context:**

- `allowResize` → attribute `allowResize`
- `imageCrop` → attribute `imageCrop`
- `fixedHeight` → attribute `fixedHeight`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function saveWithInnerBlocks( { attributes } ) {
	const { caption, columns, imageCrop } = attributes;

	const className = clsx( 'has-nested-images', {
		[ `columns-${ columns }` ]: columns !== undefined,
		[ `columns-default` ]: columns === undefined,
		'is-cropped': imageCrop,
	} );
	const blockProps = useBlockProps.save( { className } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<figure { ...innerBlocksProps }>
			{ innerBlocksProps.children }
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content
					tagName="figcaption"
					className={ clsx(
						'blocks-gallery-caption',
						__experimentalGetElementClassName( 'caption' )
					) }
					value={ caption }
				/>
			) }
		</figure>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:gallery {"linkTo":"none"} -->
<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><!-- wp:image {"id":1} -->
<figure class="wp-block-image"><img src="https://example.com/1.jpg" alt="" class="wp-image-1"/></figure>
<!-- /wp:image --></figure>
<!-- /wp:gallery -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/gallery/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/gallery/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/gallery/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/gallery/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/gallery/deprecated.js)
