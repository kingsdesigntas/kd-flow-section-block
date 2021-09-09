import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Button,
} from "@wordpress/components";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
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
	const blockProps = useBlockProps({
		className: `align${blockWidth} kdsection-x-pad-${innerHorizontalPadding} kdsection-y-pad-${innerVerticalPadding}  flow flow-top-${outerTopMargin} flow-bottom-${outerBottomMargin} block-entry-content first-block-negative-margin`,
		style: { backgroundColor: blockBackgroundColor },
	});
	const onUpdateImage = (image) => {
		setAttributes({
			backgroundMediaId: image.id,
		});
	};
	const onRemoveImage = () => {
		setAttributes({
			backgroundMediaId: undefined,
		});
	};
	return [
		<InspectorControls>
			<Panel>
				<PanelBody>
					<PanelRow>
						<SelectControl
							label="Block Width"
							value={attributes.blockWidth}
							options={[
								{ label: "Small", value: "small" },
								{ label: "Medium", value: "medium" },
								{ label: "Large", value: "large" },
								{ label: "Wide", value: "wide" },
								{ label: "Full", value: "full" },
							]}
							onChange={(newval) => setAttributes({ blockWidth: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Inner Vertical Padding"
							value={attributes.innerVerticalPadding}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) =>
								setAttributes({ innerVerticalPadding: newval })
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Inner Horizontal Padding"
							value={attributes.innerHorizontalPadding}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) =>
								setAttributes({ innerHorizontalPadding: newval })
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Outer Top Margin"
							value={attributes.outerTopMargin}
							options={[
								{ label: "None", value: "none" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
							]}
							onChange={(newval) => setAttributes({ outerTopMargin: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Outer Bottom Margin"
							value={attributes.outerBottomMargin}
							options={[
								{ label: "None", value: "none" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
							]}
							onChange={(newval) =>
								setAttributes({ outerBottomMargin: newval })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							label="Background Color"
							color={attributes.blockBackgroundColor}
							onChangeComplete={(newval) =>
								setAttributes({ blockBackgroundColor: newval.hex })
							}
						/>
					</PanelRow>
					{/* <PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onUpdateImage}
								value={backgroundMediaId}
								render={({ open }) => (
									<Button
										className={
											!backgroundMediaId
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
									>
										{!backgroundMediaId &&
											__("Set background image", "image-selector-example")}
										{!!backgroundMediaId && !bgImage && <Spinner />}
										{!!backgroundMediaId && bgImage && (
											<ResponsiveWrapper
												naturalWidth={bgImage.media_details.width}
												naturalHeight={bgImage.media_details.height}
											>
												<img
													src={bgImage.source_url}
													alt={__("Background image", "image-selector-example")}
												/>
											</ResponsiveWrapper>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{!!backgroundMediaId && bgImage && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onUpdateImage}
									value={backgroundMediaId}
									render={({ open }) => (
										<Button onClick={open} isDefault isLarge>
											{__("Replace background image", "image-selector-example")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
						{!!backgroundMediaId && (
							<MediaUploadCheck>
								<Button onClick={onRemoveImage} isLink isDestructive>
									{__("Remove background image", "image-selector-example")}
								</Button>
							</MediaUploadCheck>
						)}
					</PanelRow> */}
				</PanelBody>
			</Panel>
		</InspectorControls>,
		<div {...blockProps}>
			<InnerBlocks />
		</div>,
	];
}
