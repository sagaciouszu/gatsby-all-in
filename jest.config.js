module.exports = {
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageThreshold: {
		global: {
			statements: 98,
			branches: 91,
			functions: 98,
			lines: 98,
		},
	},
}
