import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockWidth,
		innerHorizontalPadding,
		innerVerticalPadding,
		outerTopMargin,
		outerBottomMargin,
		useBackgroundImage,
		blockBackgroundColor,
		backgroundMediaId,
		backgroundMediaUrl,
		useOverlay,
		overlayColor,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `align${blockWidth} kdsection-x-pad-${innerHorizontalPadding} kdsection-y-pad-${innerVerticalPadding}  flow flow-top-${outerTopMargin} flow-bottom-${outerBottomMargin} block-entry-content first-block-negative-margin`,
				style: { backgroundColor: blockBackgroundColor },
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
