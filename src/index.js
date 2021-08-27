import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("kd-flow/section-block", {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
