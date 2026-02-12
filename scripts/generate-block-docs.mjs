/**
 * Block Documentation Generator
 *
 * Reads all block.json files and associated save.js/index.php files
 * to generate per-block Markdown documentation for block theme developers.
 */

import fs from 'fs';
import path from 'path';

const SRC_DIR = 'packages/block-library/src';
const DOCS_DIR = 'docs/reference-guides/core-blocks';

// Ensure output directory exists
fs.mkdirSync(DOCS_DIR, { recursive: true });

/**
 * Get all block directories that contain a block.json
 */
function getBlockDirs() {
	const dirs = fs
		.readdirSync( SRC_DIR, { withFileTypes: true } )
		.filter( ( d ) => d.isDirectory() );

	return dirs
		.filter( ( d ) =>
			fs.existsSync( path.join( SRC_DIR, d.name, 'block.json' ) )
		)
		.map( ( d ) => d.name )
		.sort();
}

/**
 * Read and parse block.json for a given block
 */
function readBlockJson( blockDir ) {
	const filePath = path.join( SRC_DIR, blockDir, 'block.json' );
	return JSON.parse( fs.readFileSync( filePath, 'utf-8' ) );
}

/**
 * Check which source files exist for a block
 */
function getBlockFiles( blockDir ) {
	const dir = path.join( SRC_DIR, blockDir );
	return {
		hasSaveJs: fs.existsSync( path.join( dir, 'save.js' ) ),
		hasIndexPhp: fs.existsSync( path.join( dir, 'index.php' ) ),
		hasEditJs: fs.existsSync( path.join( dir, 'edit.js' ) ),
		hasDeprecated: fs.existsSync(
			path.join( dir, 'deprecated.js' )
		),
		hasTransforms: fs.existsSync(
			path.join( dir, 'transforms.js' )
		),
		hasVariations: fs.existsSync(
			path.join( dir, 'variations.js' )
		),
	};
}

/**
 * Read save.js content if it exists
 */
function readSaveJs( blockDir ) {
	const filePath = path.join( SRC_DIR, blockDir, 'save.js' );
	if ( fs.existsSync( filePath ) ) {
		return fs.readFileSync( filePath, 'utf-8' );
	}
	return null;
}

/**
 * Read index.php content if it exists (for dynamic blocks)
 */
function readIndexPhp( blockDir ) {
	const filePath = path.join( SRC_DIR, blockDir, 'index.php' );
	if ( fs.existsSync( filePath ) ) {
		return fs.readFileSync( filePath, 'utf-8' );
	}
	return null;
}

/**
 * Extract the render function name from index.php
 */
function extractRenderFunction( phpContent ) {
	if ( ! phpContent ) {
		return null;
	}
	// Look for render_callback or render function declaration
	const match = phpContent.match(
		/function\s+([\w_]+)\s*\(\s*\$attributes/
	);
	return match ? match[ 1 ] : null;
}

/**
 * Determine the root HTML element from save.js
 */
function extractRootElement( saveContent ) {
	if ( ! saveContent ) {
		return null;
	}

	// Common patterns in save.js
	const patterns = [
		// <TagName ...useBlockProps.save
		/<(\w+)\s+\{?\s*\.\.\.useBlockProps\.save/,
		// <tagname {...useBlockProps.save
		/<(\w+)\s+\{\s*\.\.\.useBlockProps\.save/,
		// return ( <div ... )
		/return\s*\(\s*<(\w+)/,
	];

	for ( const pattern of patterns ) {
		const match = saveContent.match( pattern );
		if ( match ) {
			return match[ 1 ];
		}
	}

	// Check for InnerBlocks.Content only (no wrapper)
	if (
		saveContent.includes( '<InnerBlocks.Content' ) &&
		! saveContent.match( /<(\w+)\s+\{?\s*\.\.\.useBlockProps/ )
	) {
		return 'InnerBlocks.Content (no wrapper)';
	}

	return null;
}

/**
 * Build an HTML markup example from the save.js source
 */
function buildMarkupExample( blockJson, saveContent, blockDir ) {
	const { name, title } = blockJson;
	const slug = name.replace( 'core/', '' );
	const wpClass = `wp-block-${ slug }`;

	if ( ! saveContent ) {
		return `<!-- Dynamic block: rendered server-side via PHP -->\n<!-- No static HTML saved in the post content -->`;
	}

	// Return null saves
	if ( saveContent.match( /return\s+null|save:\s*\(\)\s*=>\s*null/ ) ) {
		return `<!-- Dynamic block: save returns null -->\n<!-- Rendered server-side via PHP -->`;
	}

	// Build examples based on known patterns
	const rootEl = extractRootElement( saveContent );
	if ( ! rootEl ) {
		return null;
	}

	return null; // We'll include the save.js source instead for accuracy
}

/**
 * Format attributes as a Markdown table
 */
function formatAttributesTable( attributes ) {
	if ( ! attributes || Object.keys( attributes ).length === 0 ) {
		return '_This block has no custom attributes._';
	}

	const rows = [];
	rows.push(
		'| Attribute | Type | Default | Description |',
		'|-----------|------|---------|-------------|'
	);

	for ( const [ attrName, attrDef ] of Object.entries( attributes ) ) {
		const type = Array.isArray( attrDef.type )
			? attrDef.type.join( ' \\| ' )
			: attrDef.type || 'N/A';
		const defaultVal =
			attrDef.default !== undefined
				? `\`${ JSON.stringify( attrDef.default ) }\``
				: '—';

		const descParts = [];
		if ( attrDef.source ) {
			descParts.push( `Source: \`${ attrDef.source }\`` );
		}
		if ( attrDef.selector ) {
			descParts.push( `Selector: \`${ attrDef.selector }\`` );
		}
		if ( attrDef.attribute ) {
			descParts.push( `HTML attribute: \`${ attrDef.attribute }\`` );
		}
		if ( attrDef.enum ) {
			descParts.push(
				`Enum: ${ attrDef.enum
					.map( ( v ) => `\`${ v }\`` )
					.join( ', ' ) }`
			);
		}
		if ( attrDef.role ) {
			descParts.push( `Role: \`${ attrDef.role }\`` );
		}

		const desc = descParts.length > 0 ? descParts.join( '. ' ) : '—';

		rows.push( `| \`${ attrName }\` | \`${ type }\` | ${ defaultVal } | ${ desc } |` );
	}

	return rows.join( '\n' );
}

/**
 * Format supports as a readable section
 */
function formatSupports( supports ) {
	if ( ! supports || Object.keys( supports ).length === 0 ) {
		return '_This block does not declare explicit supports._';
	}

	const lines = [];

	for ( const [ key, value ] of Object.entries( supports ) ) {
		if ( typeof value === 'boolean' ) {
			lines.push( `- **${ key }**: \`${ value }\`` );
		} else if ( Array.isArray( value ) ) {
			lines.push(
				`- **${ key }**: ${ value
					.map( ( v ) => `\`${ JSON.stringify( v ) }\`` )
					.join( ', ' ) }`
			);
		} else if ( typeof value === 'object' && value !== null ) {
			lines.push( `- **${ key }**:` );
			for ( const [ subKey, subValue ] of Object.entries( value ) ) {
				if (
					subKey.startsWith( '__experimental' ) ||
					subKey.startsWith( '__unstable' )
				) {
					const cleanKey = subKey
						.replace( /^__experimental/, '' )
						.replace( /^__unstable/, '' );
					if (
						typeof subValue === 'object' &&
						subValue !== null
					) {
						lines.push(
							`  - _${ cleanKey }_ (experimental): \`${ JSON.stringify( subValue ) }\``
						);
					} else {
						lines.push(
							`  - _${ cleanKey }_ (experimental): \`${ subValue }\``
						);
					}
				} else if (
					typeof subValue === 'object' &&
					subValue !== null
				) {
					lines.push(
						`  - ${ subKey }: \`${ JSON.stringify( subValue ) }\``
					);
				} else {
					lines.push( `  - ${ subKey }: \`${ subValue }\`` );
				}
			}
		} else {
			lines.push( `- **${ key }**: \`${ JSON.stringify( value ) }\`` );
		}
	}

	return lines.join( '\n' );
}

/**
 * Format context information
 */
function formatContext( usesContext, providesContext ) {
	const parts = [];

	if ( usesContext && usesContext.length > 0 ) {
		parts.push( '**Uses Context:**' );
		parts.push( '' );
		for ( const ctx of usesContext ) {
			parts.push( `- \`${ ctx }\`` );
		}
	}

	if ( providesContext && Object.keys( providesContext ).length > 0 ) {
		if ( parts.length > 0 ) {
			parts.push( '' );
		}
		parts.push( '**Provides Context:**' );
		parts.push( '' );
		for ( const [ key, value ] of Object.entries( providesContext ) ) {
			parts.push( `- \`${ key }\` → attribute \`${ value }\`` );
		}
	}

	return parts.length > 0
		? parts.join( '\n' )
		: '_This block does not use or provide context._';
}

/**
 * Format block relationships (parent, ancestor, allowedBlocks)
 */
function formatRelationships( blockJson ) {
	const parts = [];

	if ( blockJson.parent && blockJson.parent.length > 0 ) {
		parts.push( '**Parent blocks (direct):**' );
		for ( const p of blockJson.parent ) {
			parts.push( `- \`${ p }\`` );
		}
	}

	if ( blockJson.ancestor && blockJson.ancestor.length > 0 ) {
		if ( parts.length > 0 ) {
			parts.push( '' );
		}
		parts.push( '**Ancestor blocks:**' );
		for ( const a of blockJson.ancestor ) {
			parts.push( `- \`${ a }\`` );
		}
	}

	if ( blockJson.allowedBlocks && blockJson.allowedBlocks.length > 0 ) {
		if ( parts.length > 0 ) {
			parts.push( '' );
		}
		parts.push( '**Allowed inner blocks:**' );
		for ( const b of blockJson.allowedBlocks ) {
			parts.push( `- \`${ b }\`` );
		}
	}

	return parts.length > 0 ? parts.join( '\n' ) : null;
}

/**
 * Format block styles
 */
function formatStyles( styles ) {
	if ( ! styles || styles.length === 0 ) {
		return null;
	}

	const rows = [
		'| Style Name | Label | Default |',
		'|------------|-------|---------|',
	];

	for ( const style of styles ) {
		rows.push(
			`| \`${ style.name }\` | ${ style.label } | ${ style.isDefault ? 'Yes' : 'No' } |`
		);
	}

	return rows.join( '\n' );
}

/**
 * Determine if a block is static, dynamic, or hybrid
 */
function getBlockType( files ) {
	if ( files.hasSaveJs && files.hasIndexPhp ) {
		return 'hybrid';
	}
	if ( files.hasSaveJs ) {
		return 'static';
	}
	if ( files.hasIndexPhp ) {
		return 'dynamic';
	}
	return 'unknown';
}

/**
 * Extract a simplified markup example from the save.js content
 */
function extractSaveMarkup( saveContent ) {
	if ( ! saveContent ) {
		return null;
	}

	// Check if save returns null
	if (
		saveContent.match(
			/export\s+default\s+function\s+save\s*\(\)\s*\{[\s\S]*?return\s+null/
		) ||
		saveContent.match( /save\s*:\s*\(\)\s*=>\s*null/ )
	) {
		return '// Returns null — rendered entirely server-side';
	}

	// Extract the return JSX block
	const returnMatch = saveContent.match(
		/return\s*\(\s*([\s\S]*?)\s*\);\s*\}/
	);
	if ( returnMatch ) {
		return returnMatch[ 1 ].trim();
	}

	return null;
}

/**
 * Generate a realistic example for a dynamic block
 */
function getDynamicBlockExample( slug, attributes ) {
	const dynamicExamples = {
		archives: `<!-- wp:archives {"displayAsDropdown":true,"showPostCounts":true} /-->`,
		avatar: `<!-- wp:avatar {"size":96,"isLink":true} /-->`,
		block: `<!-- wp:block {"ref":123} /-->`,
		breadcrumbs: `<!-- wp:breadcrumbs /-->`,
		calendar: `<!-- wp:calendar /-->`,
		categories: `<!-- wp:categories {"displayAsDropdown":false,"showHierarchy":true,"showPostCounts":true} /-->`,
		'comment-author-avatar': `<!-- wp:comment-author-avatar {"width":48,"height":48} /-->`,
		'comment-author-name': `<!-- wp:comment-author-name {"isLink":true,"linkTarget":"_self"} /-->`,
		'comment-content': `<!-- wp:comment-content /-->`,
		'comment-date': `<!-- wp:comment-date {"format":"F j, Y"} /-->`,
		'comment-edit-link': `<!-- wp:comment-edit-link /-->`,
		'comment-reply-link': `<!-- wp:comment-reply-link /-->`,
		'comments-pagination-next': `<!-- wp:comments-pagination-next {"label":"Newer Comments"} /-->`,
		'comments-pagination-numbers': `<!-- wp:comments-pagination-numbers /-->`,
		'comments-pagination-previous': `<!-- wp:comments-pagination-previous {"label":"Older Comments"} /-->`,
		'comments-title': `<!-- wp:comments-title {"showPostTitle":true,"showCommentsCount":true} /-->`,
		footnotes: `<!-- wp:footnotes /-->`,
		'latest-comments': `<!-- wp:latest-comments {"commentsToShow":5,"displayAvatar":true,"displayDate":true,"displayExcerpt":true} /-->`,
		'latest-posts': `<!-- wp:latest-posts {"postsToShow":5,"displayPostDate":true,"displayFeaturedImage":false} /-->`,
		loginout: `<!-- wp:loginout {"displayLoginAsForm":false,"redirectToCurrent":true} /-->`,
		'navigation-overlay-close': `<!-- wp:navigation-overlay-close /-->`,
		'page-list': `<!-- wp:page-list /-->`,
		'page-list-item': `<!-- wp:page-list-item {"id":42,"label":"About","link":"https://example.com/about/"} /-->`,
		pattern: `<!-- wp:pattern {"slug":"theme-name/pattern-slug"} /-->`,
		'post-author': `<!-- wp:post-author {"showAvatar":true,"showBio":true,"avatarSize":48} /-->`,
		'post-author-biography': `<!-- wp:post-author-biography /-->`,
		'post-author-name': `<!-- wp:post-author-name {"isLink":true,"linkTarget":"_self"} /-->`,
		'post-comments-count': `<!-- wp:post-comments-count /-->`,
		'post-comments-form': `<!-- wp:post-comments-form /-->`,
		'post-comments-link': `<!-- wp:post-comments-link /-->`,
		'post-content': `<!-- wp:post-content {"layout":{"type":"constrained"}} /-->`,
		'post-date': `<!-- wp:post-date {"format":"F j, Y"} /-->`,
		'post-excerpt': `<!-- wp:post-excerpt {"moreText":"Read more","showMoreOnNewLine":true} /-->`,
		'post-featured-image': `<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","width":"100%"} /-->`,
		'post-navigation-link': `<!-- wp:post-navigation-link {"type":"next","label":"Next Post"} /-->`,
		'post-terms': `<!-- wp:post-terms {"term":"category"} /-->`,
		'post-time-to-read': `<!-- wp:post-time-to-read /-->`,
		'post-title': `<!-- wp:post-title {"level":1,"isLink":true} /-->`,
		'query-pagination-next': `<!-- wp:query-pagination-next {"label":"Next Page"} /-->`,
		'query-pagination-numbers': `<!-- wp:query-pagination-numbers /-->`,
		'query-pagination-previous': `<!-- wp:query-pagination-previous {"label":"Previous Page"} /-->`,
		'query-title': `<!-- wp:query-title {"type":"archive"} /-->`,
		'query-total': `<!-- wp:query-total /-->`,
		'read-more': `<!-- wp:read-more {"content":"Continue reading"} /-->`,
		rss: `<!-- wp:rss {"feedURL":"https://example.com/feed/","itemsToShow":5,"displayExcerpt":true,"displayDate":true} /-->`,
		search: `<!-- wp:search {"label":"Search","placeholder":"Search...","buttonText":"Search"} /-->`,
		'site-logo': `<!-- wp:site-logo {"width":120,"isLink":true} /-->`,
		'site-tagline': `<!-- wp:site-tagline /-->`,
		'site-title': `<!-- wp:site-title {"level":1,"isLink":true} /-->`,
		'social-link': `<!-- wp:social-link {"url":"https://twitter.com/example","service":"twitter"} /-->`,
		'tag-cloud': `<!-- wp:tag-cloud {"numberOfTags":45,"showTagCounts":true} /-->`,
		'template-part': `<!-- wp:template-part {"slug":"header","area":"header","tagName":"header"} /-->`,
		'term-count': `<!-- wp:term-count /-->`,
		'term-description': `<!-- wp:term-description /-->`,
		'term-name': `<!-- wp:term-name {"level":1,"isLink":true} /-->`,
	};

	if ( dynamicExamples[ slug ] ) {
		return dynamicExamples[ slug ];
	}

	// Fallback: generate from attributes with defaults
	const exampleAttrs = {};
	if ( attributes ) {
		for ( const [ attrName, attrDef ] of Object.entries( attributes ) ) {
			if ( attrDef.default !== undefined ) {
				exampleAttrs[ attrName ] = attrDef.default;
			}
		}
	}

	if ( Object.keys( exampleAttrs ).length > 0 ) {
		return `<!-- wp:${ slug } ${ JSON.stringify( exampleAttrs ) } /-->`;
	}
	return `<!-- wp:${ slug } /-->`;
}

/**
 * Generate documentation for a single block
 */
function generateBlockDoc( blockDir ) {
	const blockJson = readBlockJson( blockDir );
	const files = getBlockFiles( blockDir );
	const saveContent = readSaveJs( blockDir );
	const phpContent = readIndexPhp( blockDir );
	const blockType = getBlockType( files );

	const {
		name,
		title,
		category,
		description,
		keywords,
		textdomain,
		apiVersion,
		attributes,
		supports,
		usesContext,
		providesContext,
		styles,
		parent,
		ancestor,
		allowedBlocks,
		selectors,
	} = blockJson;

	const slug = name.replace( 'core/', '' );
	const lines = [];

	// Title and metadata
	lines.push( `# ${ title }` );
	lines.push( '' );
	lines.push( `**Name:** \`${ name }\`  ` );
	lines.push(
		`**Category:** ${ category }  `
	);
	lines.push( `**API Version:** ${ apiVersion || 2 }  ` );

	const typeLabel = {
		static: 'Static (saved in post content)',
		dynamic: 'Dynamic (server-rendered)',
		hybrid: 'Hybrid (static save + server-rendered enhancements)',
	};
	lines.push( `**Block Type:** ${ typeLabel[ blockType ] || 'Unknown' }` );
	lines.push( '' );

	if ( description ) {
		lines.push( `> ${ description }` );
		lines.push( '' );
	}

	if ( keywords && keywords.length > 0 ) {
		lines.push(
			`**Keywords:** ${ keywords.map( ( k ) => `\`${ k }\`` ).join( ', ' ) }`
		);
		lines.push( '' );
	}

	// Block relationships
	const relationships = formatRelationships( blockJson );
	if ( relationships ) {
		lines.push( '## Block Relationships' );
		lines.push( '' );
		lines.push( relationships );
		lines.push( '' );
	}

	// Attributes
	lines.push( '## Attributes' );
	lines.push( '' );
	lines.push( formatAttributesTable( attributes ) );
	lines.push( '' );

	// Supports
	lines.push( '## Supports' );
	lines.push( '' );
	lines.push( formatSupports( supports ) );
	lines.push( '' );

	// Context
	if (
		( usesContext && usesContext.length > 0 ) ||
		( providesContext && Object.keys( providesContext ).length > 0 )
	) {
		lines.push( '## Context' );
		lines.push( '' );
		lines.push( formatContext( usesContext, providesContext ) );
		lines.push( '' );
	}

	// Styles
	const stylesSection = formatStyles( styles );
	if ( stylesSection ) {
		lines.push( '## Block Styles' );
		lines.push( '' );
		lines.push( stylesSection );
		lines.push( '' );
	}

	// Selectors
	if ( selectors && Object.keys( selectors ).length > 0 ) {
		lines.push( '## CSS Selectors' );
		lines.push( '' );
		for ( const [ key, value ] of Object.entries( selectors ) ) {
			if ( typeof value === 'string' ) {
				lines.push( `- **${ key }**: \`${ value }\`` );
			} else if ( typeof value === 'object' ) {
				lines.push( `- **${ key }**:` );
				for ( const [ subKey, subValue ] of Object.entries( value ) ) {
					lines.push( `  - ${ subKey }: \`${ subValue }\`` );
				}
			}
		}
		lines.push( '' );
	}

	// Markup section
	lines.push( '## Markup' );
	lines.push( '' );

	if ( blockType === 'dynamic' ) {
		lines.push(
			'This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.'
		);
		lines.push( '' );

		const renderFunc = extractRenderFunction( phpContent );
		if ( renderFunc ) {
			lines.push( `**Render function:** \`${ renderFunc }()\`` );
			lines.push( '' );
		}

		lines.push(
			'In post content, this block is stored as a block comment with JSON attributes:'
		);
		lines.push( '' );
		lines.push( '```html' );
		const dynamicExample = getDynamicBlockExample( slug, attributes );
		lines.push( dynamicExample );
		lines.push( '```' );
	} else if ( blockType === 'static' || blockType === 'hybrid' ) {
		const saveJsx = extractSaveMarkup( saveContent );

		if ( saveJsx && saveJsx.startsWith( '//' ) ) {
			// Returns null
			lines.push(
				'This block\'s `save` function returns `null` — rendering is handled server-side.'
			);
		} else {
			lines.push(
				'The block saves the following markup structure in post content:'
			);
			lines.push( '' );
			lines.push(
				'<details>'
			);
			lines.push(
				'<summary>Save function JSX (click to expand)</summary>'
			);
			lines.push( '' );
			lines.push( '```jsx' );
			// Include the full save function for accuracy
			if ( saveContent ) {
				// Extract just the function body
				const funcMatch = saveContent.match(
					/export default function save[\s\S]*$/
				);
				if ( funcMatch ) {
					lines.push( funcMatch[ 0 ].trim() );
				} else {
					lines.push( saveContent.trim() );
				}
			}
			lines.push( '```' );
			lines.push( '' );
			lines.push( '</details>' );
		}

		lines.push( '' );

		// Add a basic HTML example
		const wpBlockClass = `wp-block-${ slug.replace( /\//g, '-' ) }`;
		lines.push( '**Example post content:**' );
		lines.push( '' );
		lines.push( '```html' );
		lines.push( generateHtmlExample( blockJson, saveContent, blockDir ) );
		lines.push( '```' );

		if ( blockType === 'hybrid' ) {
			lines.push( '' );
			lines.push(
				'> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.'
			);
		}
	}

	lines.push( '' );

	// Source files reference
	lines.push( '## Source' );
	lines.push( '' );
	lines.push(
		`- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/block.json)`
	);
	if ( files.hasSaveJs ) {
		lines.push(
			`- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/save.js)`
		);
	}
	if ( files.hasEditJs ) {
		lines.push(
			`- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/edit.js)`
		);
	}
	if ( files.hasIndexPhp ) {
		lines.push(
			`- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/index.php)`
		);
	}
	if ( files.hasDeprecated ) {
		lines.push(
			`- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/deprecated.js)`
		);
	}
	if ( files.hasVariations ) {
		lines.push(
			`- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/${ blockDir }/variations.js)`
		);
	}
	lines.push( '' );

	return lines.join( '\n' );
}

/**
 * Generate a realistic HTML example for a block
 */
function generateHtmlExample( blockJson, saveContent, blockDir ) {
	const { name, attributes } = blockJson;
	const slug = name.replace( 'core/', '' );
	const wpClass = `wp-block-${ slug }`;

	// Known block examples — hand-crafted for accuracy
	const examples = {
		paragraph: `<!-- wp:paragraph -->
<p class="${ wpClass }">Your paragraph text here.</p>
<!-- /wp:paragraph -->`,

		heading: `<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Your heading text</h2>
<!-- /wp:heading -->`,

		image: `<!-- wp:image {"id":123,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="${ wpClass } size-large"><img src="https://example.com/image.jpg" alt="Alt text" class="wp-image-123"/></figure>
<!-- /wp:image -->`,

		list: `<!-- wp:list -->
<ul class="${ wpClass }"><!-- wp:list-item -->
<li>List item</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->`,

		'list-item': `<!-- wp:list-item -->
<li>List item text</li>
<!-- /wp:list-item -->`,

		quote: `<!-- wp:quote -->
<blockquote class="${ wpClass }"><!-- wp:paragraph -->
<p>Quote text here.</p>
<!-- /wp:paragraph --><cite>Citation</cite></blockquote>
<!-- /wp:quote -->`,

		code: `<!-- wp:code -->
<pre class="${ wpClass }"><code>your_code_here();</code></pre>
<!-- /wp:code -->`,

		preformatted: `<!-- wp:preformatted -->
<pre class="${ wpClass }">Preformatted text here.</pre>
<!-- /wp:preformatted -->`,

		pullquote: `<!-- wp:pullquote -->
<figure class="${ wpClass }"><blockquote><p>Pullquote text.</p><cite>Citation</cite></blockquote></figure>
<!-- /wp:pullquote -->`,

		table: `<!-- wp:table -->
<figure class="${ wpClass }"><table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table></figure>
<!-- /wp:table -->`,

		verse: `<!-- wp:verse -->
<pre class="${ wpClass }">Verse text here.</pre>
<!-- /wp:verse -->`,

		group: `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="${ wpClass }"><!-- wp:paragraph -->
<p>Inner content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->`,

		columns: `<!-- wp:columns -->
<div class="${ wpClass }"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p>Column content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->`,

		column: `<!-- wp:column -->
<div class="${ wpClass }"><!-- wp:paragraph -->
<p>Column content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->`,

		cover: `<!-- wp:cover {"url":"https://example.com/image.jpg","dimRatio":50} -->
<div class="${ wpClass }"><span class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background" src="https://example.com/image.jpg" alt=""/><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
<p>Cover text</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->`,

		button: `<!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Button text</a></div>
<!-- /wp:button -->`,

		buttons: `<!-- wp:buttons -->
<div class="${ wpClass }"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->`,

		separator: `<!-- wp:separator -->
<hr class="${ wpClass } has-alpha-channel-opacity"/>
<!-- /wp:separator -->`,

		spacer: `<!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="${ wpClass }"></div>
<!-- /wp:spacer -->`,

		embed: `<!-- wp:embed {"url":"https://example.com/video","type":"video","providerNameSlug":"youtube"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://example.com/video
</div></figure>
<!-- /wp:embed -->`,

		html: `<!-- wp:html -->
<div>Custom HTML content</div>
<!-- /wp:html -->`,

		more: `<!-- wp:more -->
<!--more-->
<!-- /wp:more -->`,

		nextpage: `<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->`,

		audio: `<!-- wp:audio -->
<figure class="${ wpClass }"><audio controls src="https://example.com/audio.mp3"></audio></figure>
<!-- /wp:audio -->`,

		video: `<!-- wp:video -->
<figure class="${ wpClass }"><video controls src="https://example.com/video.mp4"></video></figure>
<!-- /wp:video -->`,

		file: `<!-- wp:file {"id":123,"href":"https://example.com/file.pdf"} -->
<div class="${ wpClass }"><a href="https://example.com/file.pdf">File name</a><a href="https://example.com/file.pdf" class="wp-block-file__button wp-element-button" download>Download</a></div>
<!-- /wp:file -->`,

		gallery: `<!-- wp:gallery {"linkTo":"none"} -->
<figure class="${ wpClass } has-nested-images columns-default is-cropped"><!-- wp:image {"id":1} -->
<figure class="wp-block-image"><img src="https://example.com/1.jpg" alt="" class="wp-image-1"/></figure>
<!-- /wp:image --></figure>
<!-- /wp:gallery -->`,

		'media-text': `<!-- wp:media-text {"mediaId":123,"mediaType":"image"} -->
<div class="${ wpClass } is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://example.com/image.jpg" alt="" class="wp-image-123"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>Content area</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->`,

		details: `<!-- wp:details -->
<details class="${ wpClass }"><summary>Summary text</summary><!-- wp:paragraph -->
<p>Details content</p>
<!-- /wp:paragraph --></details>
<!-- /wp:details -->`,

		'social-links': `<!-- wp:social-links -->
<ul class="${ wpClass }"><!-- wp:social-link {"url":"https://twitter.com","service":"twitter"} /--></ul>
<!-- /wp:social-links -->`,

		freeform: `<!-- wp:freeform -->
<p>Classic editor content</p>
<!-- /wp:freeform -->`,

		shortcode: `<!-- wp:shortcode -->
[gallery ids="1,2,3"]
<!-- /wp:shortcode -->`,

		'text-columns': `<!-- wp:text-columns {"columns":2} -->
<div class="${ wpClass } alignundefined columns-2"><div class="wp-block-column"><p>Column 1</p></div><div class="wp-block-column"><p>Column 2</p></div></div>
<!-- /wp:text-columns -->`,

		missing: `<!-- wp:missing {"originalName":"core/unknown-block"} -->
<!-- Content of unrecognized block -->
<!-- /wp:missing -->`,

		// Navigation and related blocks
		navigation: `<!-- wp:navigation {"ref":123} /-->`,

		'navigation-link': `<!-- wp:navigation-link {"label":"About","url":"/about/","kind":"post-type","isTopLevelLink":true} /-->`,

		'navigation-submenu': `<!-- wp:navigation-submenu {"label":"Services","url":"/services/"} -->
<!-- wp:navigation-link {"label":"Web Design","url":"/services/web-design/"} /-->
<!-- wp:navigation-link {"label":"Development","url":"/services/development/"} /-->
<!-- /wp:navigation-submenu -->`,

		'home-link': `<!-- wp:home-link {"label":"Home"} /-->`,

		// Query loop and related blocks
		query: `<!-- wp:query {"queryId":1,"query":{"perPage":10,"postType":"post","order":"desc","orderBy":"date"}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-title {"isLink":true} /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:post-template -->
<!-- wp:query-pagination -->
<div class="wp-block-query-pagination"><!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /--></div>
<!-- /wp:query-pagination --></div>
<!-- /wp:query -->`,

		'query-no-results': `<!-- wp:query-no-results -->
<!-- wp:paragraph -->
<p>No posts found.</p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results -->`,

		'query-pagination': `<!-- wp:query-pagination -->
<div class="wp-block-query-pagination"><!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /--></div>
<!-- /wp:query-pagination -->`,

		'post-template': `<!-- wp:post-template -->
<!-- wp:post-title {"isLink":true} /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:post-template -->`,

		'post-comment': `<!-- wp:post-comment -->
<div class="wp-block-post-comment"><!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /--></div>
<!-- /wp:post-comment -->`,

		// Comment blocks
		comments: `<!-- wp:comments -->
<div class="wp-block-comments"><!-- wp:comments-title /-->
<!-- wp:comment-template -->
<!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /-->
<!-- wp:comment-reply-link /-->
<!-- /wp:comment-template -->
<!-- wp:comments-pagination /--></div>
<!-- /wp:comments -->`,

		'comment-template': `<!-- wp:comment-template -->
<!-- wp:comment-author-avatar /-->
<!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /-->
<!-- wp:comment-reply-link /-->
<!-- /wp:comment-template -->`,

		'comments-pagination': `<!-- wp:comments-pagination -->
<div class="wp-block-comments-pagination"><!-- wp:comments-pagination-previous /-->
<!-- wp:comments-pagination-numbers /-->
<!-- wp:comments-pagination-next /--></div>
<!-- /wp:comments-pagination -->`,

		// Form blocks
		form: `<!-- wp:form {"action":"/submit"} -->
<form class="wp-block-form"><!-- wp:form-input {"type":"text","name":"email","label":"Email"} /-->
<!-- wp:form-submit-button /--></form>
<!-- /wp:form -->`,

		'form-input': `<!-- wp:form-input {"type":"text","name":"field-name","label":"Field Label"} -->
<div class="wp-block-form-input"><label for="field-name">Field Label</label><input type="text" id="field-name" name="field-name"/></div>
<!-- /wp:form-input -->`,

		'form-submit-button': `<!-- wp:form-submit-button -->
<div class="wp-block-form-submit-button"><button type="submit" class="wp-block-button__link wp-element-button">Submit</button></div>
<!-- /wp:form-submit-button -->`,

		'form-submission-notification': `<!-- wp:form-submission-notification {"type":"success"} -->
<div class="wp-block-form-submission-notification"><!-- wp:paragraph -->
<p>Form submitted successfully.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:form-submission-notification -->`,

		// Accordion blocks
		accordion: `<!-- wp:accordion -->
<div class="wp-block-accordion"><!-- wp:accordion-item -->
<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Section Title</h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Panel content here.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->
<!-- /wp:accordion-item --></div>
<!-- /wp:accordion -->`,

		'accordion-item': `<!-- wp:accordion-item -->
<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Section Title</h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->
<!-- /wp:accordion-item -->`,

		'accordion-heading': `<!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading">Accordion Section Title</h3>
<!-- /wp:accordion-heading -->`,

		'accordion-panel': `<!-- wp:accordion-panel -->
<div class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>Panel content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel -->`,

		// Tab blocks
		tabs: `<!-- wp:tabs -->
<div class="wp-block-tabs"><!-- wp:tab {"label":"Tab 1"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab 1 content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab -->
<!-- wp:tab {"label":"Tab 2"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab 2 content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab --></div>
<!-- /wp:tabs -->`,

		tab: `<!-- wp:tab {"label":"Tab Label"} -->
<div class="wp-block-tab"><!-- wp:paragraph -->
<p>Tab content</p>
<!-- /wp:paragraph --></div>
<!-- /wp:tab -->`,

		// Terms query
		'terms-query': `<!-- wp:terms-query {"taxonomy":"category"} -->
<div class="wp-block-terms-query"><!-- wp:term-template -->
<!-- wp:term-name /-->
<!-- wp:term-description /-->
<!-- wp:term-count /-->
<!-- /wp:term-template --></div>
<!-- /wp:terms-query -->`,

		'term-template': `<!-- wp:term-template -->
<!-- wp:term-name {"isLink":true} /-->
<!-- wp:term-count /-->
<!-- /wp:term-template -->`,

		// Table of contents
		'table-of-contents': `<!-- wp:table-of-contents {"headings":[]} /-->`,

		// Math
		math: `<!-- wp:math -->
<div class="wp-block-math">E = mc^2</div>
<!-- /wp:math -->`,
	};

	if ( examples[ slug ] ) {
		return examples[ slug ];
	}

	// For blocks without hand-crafted examples, generate a generic one
	if ( ! saveContent ) {
		return `<!-- wp:${ slug } /-->`;
	}

	// Check if save returns null
	if (
		saveContent.match(
			/return\s+null/
		)
	) {
		return `<!-- wp:${ slug } /-->`;
	}

	// Generate based on root element
	const rootEl = extractRootElement( saveContent );
	if ( rootEl && rootEl !== 'InnerBlocks.Content (no wrapper)' ) {
		const hasInnerBlocks = saveContent.includes( 'InnerBlocks.Content' );
		if ( hasInnerBlocks ) {
			return `<!-- wp:${ slug } -->
<${ rootEl } class="${ wpClass }"><!-- inner blocks --></${ rootEl }>
<!-- /wp:${ slug } -->`;
		}
		return `<!-- wp:${ slug } -->
<${ rootEl } class="${ wpClass }">Block content</${ rootEl }>
<!-- /wp:${ slug } -->`;
	}

	return `<!-- wp:${ slug } /-->`;
}

/**
 * Generate the index/overview file
 */
function generateIndex( blockDirs ) {
	const lines = [];

	lines.push( '# Core Blocks Reference' );
	lines.push( '' );
	lines.push(
		'Complete reference documentation for all core WordPress blocks available to block theme developers.'
	);
	lines.push( '' );
	lines.push(
		`This reference covers **${ blockDirs.length } blocks** included in the WordPress block library.`
	);
	lines.push( '' );

	// Group by category
	const categories = {};

	for ( const blockDir of blockDirs ) {
		const blockJson = readBlockJson( blockDir );
		const cat = blockJson.category || 'uncategorized';
		if ( ! categories[ cat ] ) {
			categories[ cat ] = [];
		}
		categories[ cat ].push( { dir: blockDir, json: blockJson } );
	}

	const categoryLabels = {
		text: 'Text',
		media: 'Media',
		design: 'Design',
		widgets: 'Widgets',
		theme: 'Theme',
		embed: 'Embed',
		reusable: 'Reusable',
		uncategorized: 'Uncategorized',
	};

	// Table of contents
	lines.push( '## Categories' );
	lines.push( '' );

	for ( const [ cat, blocks ] of Object.entries( categories ) ) {
		const label = categoryLabels[ cat ] || cat;
		lines.push( `### ${ label }` );
		lines.push( '' );

		lines.push( '| Block | Name | Description |' );
		lines.push( '|-------|------|-------------|' );

		for ( const { dir, json } of blocks ) {
			const slug = dir;
			const link = `./${ slug }.md`;
			lines.push(
				`| [${ json.title }](${ link }) | \`${ json.name }\` | ${ json.description || '—' } |`
			);
		}

		lines.push( '' );
	}

	// Legend
	lines.push( '## Block Types' );
	lines.push( '' );
	lines.push(
		'- **Static blocks** save HTML markup directly in the post content.'
	);
	lines.push(
		'- **Dynamic blocks** are rendered server-side via PHP on each page load. They store only a block comment with JSON attributes in post content.'
	);
	lines.push(
		'- **Hybrid blocks** save static HTML but also have server-side rendering that may augment or override the saved markup.'
	);
	lines.push( '' );

	return lines.join( '\n' );
}

// ---- Main ----

const blockDirs = getBlockDirs();
console.log( `Found ${ blockDirs.length } blocks. Generating documentation...` );

// Generate per-block docs
for ( const blockDir of blockDirs ) {
	const doc = generateBlockDoc( blockDir );
	const outPath = path.join( DOCS_DIR, `${ blockDir }.md` );
	fs.writeFileSync( outPath, doc );
	console.log( `  ✓ ${ blockDir }` );
}

// Generate index
const index = generateIndex( blockDirs );
fs.writeFileSync( path.join( DOCS_DIR, 'README.md' ), index );
console.log( `  ✓ README.md (index)` );

console.log( `\nDone! Documentation generated in ${ DOCS_DIR }/` );
