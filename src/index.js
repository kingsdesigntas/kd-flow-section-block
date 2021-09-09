import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("kd-flow/section-block", {
	attributes: {
		blockWidth: {
			type: "string",
			default: "full",
		},
		innerHorizontalPadding: {
			type: "string",
			default: "lg",
		},
		innerVerticalPadding: {
			type: "string",
			default: "lg",
		},
		outerTopMargin: {
			type: "string",
			default: "xl",
		},
		outerBottomMargin: {
			type: "string",
			default: "xl",
		},
		useBackgroundImage: {
			type: "boolean",
			default: false,
		},
		blockBackgroundColor: {
			type: "string",
			default: "var(--primary-800)",
		},
		backgroundMediaId: {
			type: "number",
			default: 0,
		},
		backgroundMediaUrl: {
			type: "string",
			default: "",
		},
		useOverlay: {
			type: "boolean",
			default: false,
		},
		overlayColor: {
			type: "string",
			default: "rgba(0, 0, 0, 0.5)",
		},
	},
	edit: Edit,
	save,
});
