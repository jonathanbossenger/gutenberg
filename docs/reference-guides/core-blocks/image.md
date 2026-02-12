# Image

**Name:** `core/image`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Insert an image to make a visual statement.

**Keywords:** `img`, `photo`, `picture`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `blob` | `string` | — | Role: `local` |
| `url` | `string` | — | Source: `attribute`. Selector: `img`. HTML attribute: `src`. Role: `content` |
| `alt` | `string` | `""` | Source: `attribute`. Selector: `img`. HTML attribute: `alt`. Role: `content` |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `figcaption`. Role: `content` |
| `lightbox` | `object` | — | — |
| `title` | `string` | — | Source: `attribute`. Selector: `img`. HTML attribute: `title`. Role: `content` |
| `href` | `string` | — | Source: `attribute`. Selector: `figure > a`. HTML attribute: `href`. Role: `content` |
| `rel` | `string` | — | Source: `attribute`. Selector: `figure > a`. HTML attribute: `rel` |
| `linkClass` | `string` | — | Source: `attribute`. Selector: `figure > a`. HTML attribute: `class` |
| `id` | `number` | — | Role: `content` |
| `width` | `string` | — | — |
| `height` | `string` | — | — |
| `aspectRatio` | `string` | — | — |
| `scale` | `string` | — | — |
| `focalPoint` | `object` | — | — |
| `sizeSlug` | `string` | — | — |
| `linkDestination` | `string` | — | — |
| `linkTarget` | `string` | — | Source: `attribute`. Selector: `figure > a`. HTML attribute: `target` |

## Supports

- **interactivity**: `true`
- **align**: `"left"`, `"center"`, `"right"`, `"wide"`, `"full"`
- **anchor**: `true`
- **color**:
  - text: `false`
  - background: `false`
- **filter**:
  - duotone: `true`
- **spacing**:
  - margin: `true`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - width: `true`
  - _SkipSerialization_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"width":true}`
- **shadow**:
  - _SkipSerialization_ (experimental): `true`

## Context

**Uses Context:**

- `allowResize`
- `imageCrop`
- `fixedHeight`
- `postId`
- `postType`
- `queryId`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `rounded` | Rounded | No |

## CSS Selectors

- **border**: `.wp-block-image img, .wp-block-image .wp-block-image__crop-area, .wp-block-image .components-placeholder`
- **shadow**: `.wp-block-image img, .wp-block-image .wp-block-image__crop-area, .wp-block-image .components-placeholder`
- **filter**:
  - duotone: `.wp-block-image img, .wp-block-image .components-placeholder`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const {
		url,
		alt,
		caption,
		align,
		href,
		rel,
		linkClass,
		width,
		height,
		aspectRatio,
		scale,
		focalPoint,
		id,
		linkTarget,
		sizeSlug,
		title,
		metadata: { bindings = {} } = {},
	} = attributes;

	const newRel = ! rel ? undefined : rel;
	const borderProps = getBorderClassesAndStyles( attributes );
	const shadowProps = getShadowClassesAndStyles( attributes );

	const classes = clsx( {
		// All other align classes are handled by block supports.
		// `{ align: 'none' }` is unique to transforms for the image block.
		alignnone: 'none' === align,
		[ `size-${ sizeSlug }` ]: sizeSlug,
		'is-resized': width || height,
		'has-custom-border':
			!! borderProps.className ||
			( borderProps.style &&
				Object.keys( borderProps.style ).length > 0 ),
	} );

	const imageClasses = clsx( borderProps.className, {
		[ `wp-image-${ id }` ]: !! id,
	} );

	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ imageClasses || undefined }
			style={ {
				...borderProps.style,
				...shadowProps.style,
				aspectRatio,
				objectFit: scale,
				objectPosition:
					focalPoint && scale
						? mediaPosition( focalPoint )
						: undefined,
				width,
				height,
			} }
			title={ title }
		/>
	);

	const displayCaption =
		! RichText.isEmpty( caption ) ||
		bindings.caption ||
		bindings?.__default?.source === 'core/pattern-overrides';

	const figure = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
					rel={ newRel }
				>
					{ image }
				</a>
			) : (
				image
			) }
			{ displayCaption && (
				<RichText.Content
					className={ __experimentalGetElementClassName( 'caption' ) }
					tagName="figcaption"
					value={ caption }
				/>
			) }
		</>
	);

	return (
		<figure { ...useBlockProps.save( { className: classes } ) }>
			{ figure }
		</figure>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:image {"id":123,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://example.com/image.jpg" alt="Alt text" class="wp-image-123"/></figure>
<!-- /wp:image -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/deprecated.js)
