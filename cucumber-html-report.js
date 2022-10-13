const report = require('multiple-cucumber-html-reporter');
report.generate({
	jsonDir: 'jsonlogs', // ** Path of .json file **//
	reportPath: './reports/cucumber-report',
	metadata: {
		browser: {
			name: 'chrome',
			version: 'XX',
		},
		device: 'Local test machine',
		platform: {
			name: 'macOS',
			version: 'Big Sur',
		},
	},
});
