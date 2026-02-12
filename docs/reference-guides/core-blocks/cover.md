# Cover

**Name:** `core/cover`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Add an image or video with a text overlay.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `url` | `string` | — | Role: `content` |
| `useFeaturedImage` | `boolean` | `false` | — |
| `id` | `number` | — | — |
| `alt` | `string` | `""` | — |
| `hasParallax` | `boolean` | `false` | — |
| `isRepeated` | `boolean` | `false` | — |
| `dimRatio` | `number` | `100` | — |
| `overlayColor` | `string` | — | — |
| `customOverlayColor` | `string` | — | — |
| `isUserOverlayColor` | `boolean` | — | — |
| `backgroundType` | `string` | `"image"` | — |
| `focalPoint` | `object` | — | — |
| `minHeight` | `number` | — | — |
| `minHeightUnit` | `string` | — | — |
| `gradient` | `string` | — | — |
| `customGradient` | `string` | — | — |
| `contentPosition` | `string` | — | — |
| `isDark` | `boolean` | `true` | — |
| `templateLock` | `string \| boolean` | — | Enum: `all`, `insert`, `contentOnly`, `false` |
| `tagName` | `string` | `"div"` | — |
| `sizeSlug` | `string` | — | — |
| `poster` | `string` | — | Source: `attribute`. Selector: `video`. HTML attribute: `poster` |

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
- **shadow**: `true`
- **spacing**:
  - padding: `true`
  - margin: `["top","bottom"]`
  - blockGap: `true`
  - _DefaultControls_ (experimental): `{"padding":true,"blockGap":true}`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **color**:
  - heading: `true`
  - text: `true`
  - background: `false`
  - _SkipSerialization_ (experimental): `["gradients"]`
  - enableContrastChecker: `false`
- **dimensions**:
  - aspectRatio: `true`
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
  - allowJustification: `false`
- **interactivity**:
  - clientNavigation: `true`
- **filter**:
  - duotone: `true`
- **allowedBlocks**: `true`

## Context

**Uses Context:**

- `postId`
- `postType`

## CSS Selectors

- **filter**:
  - duotone: `.wp-block-cover > .wp-block-cover__image-background, .wp-block-cover > .wp-block-cover__video-background`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const {
		backgroundType,
		gradient,
		contentPosition,
		customGradient,
		customOverlayColor,
		dimRatio,
		focalPoint,
		useFeaturedImage,
		hasParallax,
		isDark,
		isRepeated,
		overlayColor,
		url,
		alt,
		id,
		minHeight: minHeightProp,
		minHeightUnit,
		tagName: Tag,
		sizeSlug,
		poster,
	} = attributes;
	const overlayColorClass = getColorClassName(
		'background-color',
		overlayColor
	);
	const gradientClass = __experimentalGetGradientClass( gradient );
	const minHeight =
		minHeightProp && minHeightUnit
			? `${ minHeightProp }${ minHeightUnit }`
			: minHeightProp;

	const isImageBackground = IMAGE_BACKGROUND_TYPE === backgroundType;
	const isVideoBackground = VIDEO_BACKGROUND_TYPE === backgroundType;
	const isEmbedVideoBackground =
		EMBED_VIDEO_BACKGROUND_TYPE === backgroundType;

	const isImgElement = ! ( hasParallax || isRepeated );

	const style = {
		minHeight: minHeight || undefined,
	};

	const bgStyle = {
		backgroundColor: ! overlayColorClass ? customOverlayColor : undefined,
		background: customGradient ? customGradient : undefined,
	};

	const objectPosition =
		// prettier-ignore
		focalPoint && isImgElement
			  ? mediaPosition(focalPoint)
			  : undefined;

	const backgroundImage = url ? `url(${ url })` : undefined;

	const backgroundPosition = mediaPosition( focalPoint );

	const classes = clsx(
		{
			'is-light': ! isDark,
			'has-parallax': hasParallax,
			'is-repeated': isRepeated,
			'has-custom-content-position':
				! isContentPositionCenter( contentPosition ),
		},
		getPositionClassName( contentPosition )
	);

	const imgClasses = clsx(
		'wp-block-cover__image-background',
		id ? `wp-image-${ id }` : null,
		{
			[ `size-${ sizeSlug }` ]: sizeSlug,
			'has-parallax': hasParallax,
			'is-repeated': isRepeated,
		}
	);

	const gradientValue = gradient || customGradient;

	return (
		<Tag { ...useBlockProps.save( { className: classes, style } ) }>
			{ ! useFeaturedImage &&
				isImageBackground &&
				url &&
				( isImgElement ? (
					<img
						className={ imgClasses }
						alt={ alt }
						src={ url }
						style={ { objectPosition } }
						data-object-fit="cover"
						data-object-position={ objectPosition }
					/>
				) : (
					<div
						role={ alt ? 'img' : undefined }
						aria-label={ alt ? alt : undefined }
						className={ imgClasses }
						style={ { backgroundPosition, backgroundImage } }
					/>
				) ) }
			{ isVideoBackground && url && (
				<video
					className={ clsx(
						'wp-block-cover__video-background',
						'intrinsic-ignore'
					) }
					autoPlay
					muted
					loop
					playsInline
					src={ url }
					poster={ poster }
					style={ { objectPosition } }
					data-object-fit="cover"
					data-object-position={ objectPosition }
				/>
			) }
			{ isEmbedVideoBackground && url && (
				<figure
					className={ clsx(
						'wp-block-cover__video-background',
						'wp-block-cover__embed-background',
						'wp-block-embed'
					) }
				>
					<div className="wp-block-embed__wrapper">{ url }</div>
				</figure>
			) }

			{ /* The `wp-block-cover__background` needs to be immediately before
			the `wp-block-cover__inner-container`, so the exclusion CSS selector
			`.wp-block-cover__background + .wp-block-cover__inner-container`
			works properly. If it needs to be changed in the future, the
			selector for the backward compatibility for v14 deprecation also
			needs change. */ }
			<span
				aria-hidden="true"
				className={ clsx(
					'wp-block-cover__background',
					overlayColorClass,
					dimRatioToClass( dimRatio ),
					{
						'has-background-dim': dimRatio !== undefined,
						// For backwards compatibility. Former versions of the Cover Block applied
						// `.wp-block-cover__gradient-background` in the presence of
						// media, a gradient and a dim.
						'wp-block-cover__gradient-background':
							url && gradientValue && dimRatio !== 0,
						'has-background-gradient': gradientValue,
						[ gradientClass ]: gradientClass,
					}
				) }
				style={ bgStyle }
			/>

			<div
				{ ...useInnerBlocksProps.save( {
					className: 'wp-block-cover__inner-container',
				} ) }
			/>
		</Tag>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:cover {"url":"https://example.com/image.jpg","dimRatio":50} -->
<div class="wp-block-cover"><span class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background" src="https://example.com/image.jpg" alt=""/><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
<p>Cover text</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/save.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/cover/variations.js)
