# Form Submit Button

**Name:** `core/form-submit-button`  
**Category:** common  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> A submission button for forms.

**Keywords:** `submit`, `button`, `form`

## Block Relationships

**Ancestor blocks:**
- `core/form`

**Allowed inner blocks:**
- `core/buttons`
- `core/button`

## Attributes

_This block has no custom attributes._

## Supports

_This block does not declare explicit supports._

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<div className="wp-block-form-submit-wrapper" { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:form-submit-button -->
<div class="wp-block-form-submit-button"><button type="submit" class="wp-block-button__link wp-element-button">Submit</button></div>
<!-- /wp:form-submit-button -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submit-button/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submit-button/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submit-button/edit.js)
