# More

**Name:** `core/more`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Content before this block will be shown in the excerpt on your archives page.

**Keywords:** `read more`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `customText` | `string` | `""` | Role: `content` |
| `noTeaser` | `boolean` | `false` | — |

## Supports

- **customClassName**: `false`
- **className**: `false`
- **html**: `false`
- **multiple**: `false`
- **visibility**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes: { customText, noTeaser } } ) {
	const moreTag = customText ? `<!--more ${ customText }-->` : '<!--more-->';

	const noTeaserTag = noTeaser ? '<!--noteaser-->' : '';

	return (
		<RawHTML>
			{ [ moreTag, noTeaserTag ].filter( Boolean ).join( '\n' ) }
		</RawHTML>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:more -->
<!--more-->
<!-- /wp:more -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/more/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/more/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/more/edit.js)
