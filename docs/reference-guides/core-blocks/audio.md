# Audio

**Name:** `core/audio`  
**Category:** media  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Embed a simple audio player.

**Keywords:** `music`, `sound`, `podcast`, `recording`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `blob` | `string` | — | Role: `local` |
| `src` | `string` | — | Source: `attribute`. Selector: `audio`. HTML attribute: `src`. Role: `content` |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `figcaption`. Role: `content` |
| `id` | `number` | — | Role: `content` |
| `autoplay` | `boolean` | — | Source: `attribute`. Selector: `audio`. HTML attribute: `autoplay` |
| `loop` | `boolean` | — | Source: `attribute`. Selector: `audio`. HTML attribute: `loop` |
| `preload` | `string` | — | Source: `attribute`. Selector: `audio`. HTML attribute: `preload` |

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
	const { autoplay, caption, loop, preload, src } = attributes;

	return (
		src && (
			<figure { ...useBlockProps.save() }>
				<audio
					controls="controls"
					src={ src }
					autoPlay={ autoplay }
					loop={ loop }
					preload={ preload }
				/>
				{ ! RichText.isEmpty( caption ) && (
					<RichText.Content
						tagName="figcaption"
						value={ caption }
						className={ __experimentalGetElementClassName(
							'caption'
						) }
					/>
				) }
			</figure>
		)
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:audio -->
<figure class="wp-block-audio"><audio controls src="https://example.com/audio.mp3"></audio></figure>
<!-- /wp:audio -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/audio/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/audio/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/audio/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/audio/deprecated.js)
