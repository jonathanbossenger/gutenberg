# Page Break

**Name:** `core/nextpage`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Separate your content into a multi-page experience.

**Keywords:** `next page`, `pagination`

## Block Relationships

**Parent blocks (direct):**
- `core/post-content`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **customClassName**: `false`
- **className**: `false`
- **html**: `false`
- **visibility**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	return <RawHTML>{ '<!--nextpage-->' }</RawHTML>;
}
```

</details>

**Example post content:**

```html
<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/nextpage/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/nextpage/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/nextpage/edit.js)
