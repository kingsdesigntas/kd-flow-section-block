import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "alignfull flow block-entry-content first-block-negative-margin",
	});
	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
}
