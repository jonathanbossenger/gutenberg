# List Item

**Name:** `core/list-item`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> An individual item within a list.

## Block Relationships

**Parent blocks (direct):**
- `core/list`

**Allowed inner blocks:**
- `core/list`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `placeholder` | `string` | — | — |
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `li`. Role: `content` |

## Supports

- **anchor**: `true`
- **className**: `false`
- **splitting**: `true`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - background: `true`
  - _DefaultControls_ (experimental): `{"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
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
- **interactivity**:
  - clientNavigation: `true`

## CSS Selectors

- **root**: `.wp-block-list > li`
- **border**: `.wp-block-list:not(.wp-block-list .wp-block-list) > li`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	return (
		<li { ...useBlockProps.save() }>
			<RichText.Content value={ attributes.content } />
			<InnerBlocks.Content />
		</li>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:list-item -->
<li>List item text</li>
<!-- /wp:list-item -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list-item/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list-item/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list-item/edit.js)
