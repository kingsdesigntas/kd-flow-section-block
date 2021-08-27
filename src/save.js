import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<div
			{...useBlockProps.save({
				className:
					"alignfull flow block-entry-content first-block-negative-margin",
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
