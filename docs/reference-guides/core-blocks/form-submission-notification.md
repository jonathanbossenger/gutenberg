# Form Submission Notification

**Name:** `core/form-submission-notification`  
**Category:** common  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Provide a notification message after the form has been submitted.

**Keywords:** `form`, `feedback`, `notification`, `message`

## Block Relationships

**Ancestor blocks:**
- `core/form`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `string` | `"success"` | — |

## Supports

_This block does not declare explicit supports._

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { type } = attributes;

	return (
		<div
			{ ...useInnerBlocksProps.save(
				useBlockProps.save( {
					className: clsx( 'wp-block-form-submission-notification', {
						[ `form-notification-type-${ type }` ]: type,
					} ),
				} )
			) }
		/>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:form-submission-notification {"type":"success"} -->
<div class="wp-block-form-submission-notification"><!-- wp:paragraph -->
<p>Form submitted successfully.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:form-submission-notification -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submission-notification/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submission-notification/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submission-notification/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submission-notification/index.php)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/form-submission-notification/variations.js)
