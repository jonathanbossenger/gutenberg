# Video

**Name:** `core/video`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Embed a video from your media library or upload a new one.

**Keywords:** `movie`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `autoplay` | `boolean` | — | Source: `attribute`. Selector: `video`. HTML attribute: `autoplay` |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `figcaption`. Role: `content` |
| `controls` | `boolean` | `true` | Source: `attribute`. Selector: `video`. HTML attribute: `controls` |
| `id` | `number` | — | Role: `content` |
| `loop` | `boolean` | — | Source: `attribute`. Selector: `video`. HTML attribute: `loop` |
| `muted` | `boolean` | — | Source: `attribute`. Selector: `video`. HTML attribute: `muted` |
| `poster` | `string` | — | Source: `attribute`. Selector: `video`. HTML attribute: `poster` |
| `preload` | `string` | `"metadata"` | Source: `attribute`. Selector: `video`. HTML attribute: `preload` |
| `blob` | `string` | — | Role: `local` |
| `src` | `string` | — | Source: `attribute`. Selector: `video`. HTML attribute: `src`. Role: `content` |
| `playsInline` | `boolean` | — | Source: `attribute`. Selector: `video`. HTML attribute: `playsinline` |
| `tracks` | `array` | `[]` | Role: `content` |

## Supports

- **anchor**: `true`
- **align**: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const {
		autoplay,
		caption,
		controls,
		loop,
		muted,
		poster,
		preload,
		src,
		playsInline,
		tracks,
	} = attributes;
	return (
		<figure { ...useBlockProps.save() }>
			{ src && (
				<video
					autoPlay={ autoplay }
					controls={ controls }
					loop={ loop }
					muted={ muted }
					poster={ poster }
					preload={ preload !== 'metadata' ? preload : undefined }
					src={ src }
					playsInline={ playsInline }
				>
					<Tracks tracks={ tracks } />
				</video>
			) }
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content
					className={ __experimentalGetElementClassName( 'caption' ) }
					tagName="figcaption"
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
<!-- wp:video -->
<figure class="wp-block-video"><video controls src="https://example.com/video.mp4"></video></figure>
<!-- /wp:video -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/video/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/video/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/video/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/video/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/video/deprecated.js)
