/**
 * Extend strings with ANSI escape codes for styling strings in the terminal.
 *
 * @author Stanislav Kalashnik <sk@infomir.eu>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var styles = {
		reset:     [0,   0],
		bold:      [1,  22],
		dim:       [2,  22],
		italic:    [3,  23],
		underline: [4,  24],
		inverse:   [7,  27],
		hidden:    [8,  28],
		strike:    [9,  29],
		black:     [30, 39],
		red:       [31, 39],
		green:     [32, 39],
		yellow:    [33, 39],
		blue:      [34, 39],
		magenta:   [35, 39],
		cyan:      [36, 39],
		white:     [37, 39],
		grey:      [90, 39],
		bgBlack:   [40, 49],
		bgRed:     [41, 49],
		bgGreen:   [42, 49],
		bgYellow:  [43, 49],
		bgBlue:    [44, 49],
		bgMagenta: [45, 49],
		bgCyan:    [46, 49],
		bgWhite:   [47, 49]
	};


// apply all styles to String prototype
Object.keys(styles).forEach(function ( name ) {
	// rework values to avoid unnecessary concatenations
	styles[name][0] = '\u001b[' + styles[name][0] + 'm';
	styles[name][1] = '\u001b[' + styles[name][1] + 'm';

	// add getter by style name
	Object.defineProperty(String.prototype, name, {
		get: function () {
			return styles[name][0] + this + styles[name][1];
		},
		// hide from iteration
		enumerable: false,
		// allow to change or remove this property
		configurable: true
	});
});
