<?php
/**
 * Plugin Name:       KD Flow Section Block
 * Description:       Flow section block with style controls and flow for inner content.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            KingsDesign
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       section-block
 *
 * @package           kd-flow
 */

function kd_flow_section_block_init()
{
    register_block_type(__DIR__);
}
add_action('init', 'kd_flow_section_block_init');