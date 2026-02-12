# Media & Text

**Name:** `core/media-text`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Set media and words side-by-side for a richer layout.

**Keywords:** `image`, `video`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `align` | `string` | `"none"` | — |
| `mediaAlt` | `string` | `""` | Source: `attribute`. Selector: `figure img`. HTML attribute: `alt`. Role: `content` |
| `mediaPosition` | `string` | `"left"` | — |
| `mediaId` | `number` | — | Role: `content` |
| `mediaUrl` | `string` | — | Source: `attribute`. Selector: `figure video,figure img`. HTML attribute: `src`. Role: `content` |
| `mediaLink` | `string` | — | — |
| `linkDestination` | `string` | — | — |
| `linkTarget` | `string` | — | Source: `attribute`. Selector: `figure a`. HTML attribute: `target` |
| `href` | `string` | — | Source: `attribute`. Selector: `figure a`. HTML attribute: `href`. Role: `content` |
| `rel` | `string` | — | Source: `attribute`. Selector: `figure a`. HTML attribute: `rel` |
| `linkClass` | `string` | — | Source: `attribute`. Selector: `figure a`. HTML attribute: `class` |
| `mediaType` | `string` | — | Role: `content` |
| `mediaWidth` | `number` | `50` | — |
| `mediaSizeSlug` | `string` | — | — |
| `isStackedOnMobile` | `boolean` | `true` | — |
| `verticalAlignment` | `string` | — | — |
| `imageFill` | `boolean` | — | — |
| `focalPoint` | `object` | — | — |
| `useFeaturedImage` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **color**:
  - gradients: `true`
  - heading: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
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
- **interactivity**:
  - clientNavigation: `true`
- **allowedBlocks**: `true`

## Context

**Uses Context:**

- `postId`
- `postType`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const {
		isStackedOnMobile,
		mediaAlt,
		mediaPosition,
		mediaType,
		mediaUrl,
		mediaWidth,
		mediaId,
		verticalAlignment,
		imageFill,
		focalPoint,
		linkClass,
		href,
		linkTarget,
		rel,
	} = attributes;
	const mediaSizeSlug = attributes.mediaSizeSlug || DEFAULT_MEDIA_SIZE_SLUG;
	const newRel = ! rel ? undefined : rel;

	const imageClasses = clsx( {
		[ `wp-image-${ mediaId }` ]: mediaId && mediaType === 'image',
		[ `size-${ mediaSizeSlug }` ]: mediaId && mediaType === 'image',
	} );

	const positionStyles = imageFill
		? imageFillStyles( mediaUrl, focalPoint )
		: {};

	let image = mediaUrl ? (
		<img
			src={ mediaUrl }
			alt={ mediaAlt }
			className={ imageClasses || null }
			style={ positionStyles }
		/>
	) : null;

	if ( href ) {
		image = (
			<a
				className={ linkClass }
				href={ href }
				target={ linkTarget }
				rel={ newRel }
			>
				{ image }
			</a>
		);
	}

	const mediaTypeRenders = {
		image: () => image,
		video: () => <video controls src={ mediaUrl } />,
	};
	const className = clsx( {
		'has-media-on-the-right': 'right' === mediaPosition,
		'is-stacked-on-mobile': isStackedOnMobile,
		[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
		'is-image-fill-element': imageFill,
	} );

	let gridTemplateColumns;
	if ( mediaWidth !== DEFAULT_MEDIA_WIDTH ) {
		gridTemplateColumns =
			'right' === mediaPosition
				? `auto ${ mediaWidth }%`
				: `${ mediaWidth }% auto`;
	}
	const style = {
		gridTemplateColumns,
	};

	if ( 'right' === mediaPosition ) {
		return (
			<div { ...useBlockProps.save( { className, style } ) }>
				<div
					{ ...useInnerBlocksProps.save( {
						className: 'wp-block-media-text__content',
					} ) }
				/>
				<figure className="wp-block-media-text__media">
					{ ( mediaTypeRenders[ mediaType ] || noop )() }
				</figure>
			</div>
		);
	}
	return (
		<div { ...useBlockProps.save( { className, style } ) }>
			<figure className="wp-block-media-text__media">
				{ ( mediaTypeRenders[ mediaType ] || noop )() }
			</figure>
			<div
				{ ...useInnerBlocksProps.save( {
					className: 'wp-block-media-text__content',
				} ) }
			/>
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:media-text {"mediaId":123,"mediaType":"image"} -->
<div class="wp-block-media-text is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://example.com/image.jpg" alt="" class="wp-image-123"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>Content area</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/media-text/deprecated.js)
