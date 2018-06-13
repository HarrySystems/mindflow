// object oriented
	module.exports = 
		(
			new MindFLow({
				name: "",
				description: ""
			})
		)
		.pipeline({ // step
			name: "",
			description: "",
			call: Library.extract({
				input: {
					path: 'file/path.xls'
				}	
			})
		})
		.pipeline(Library.parse) // step


// explicit pipeline
	module.exports = 
		MindFlow.define({	
			name: "",
			description: "",
			call: MindFlow.pipeline({
				steps: [
					Library.extract({ // step
						name: "",
						description: "",
						input: {
							path: 'file/path.xls' 
						}
					}),
					Library.parse() // step
				]
			})
		})
		
// implicit pipeline
	module.exports
		Mindflow.define({
			name: "",
			description: "",
			call: Library.parse({ // step
				call: Library.extract({ // step
					name: "",
					description: "",
					input: {
						path: 'file/path.xls'
					}
				})
			})
		})
		

// callback based
	module.exports = 
		MindFlow.define({
			name: "",
			description: "",
			call: MindFlow.pipeline({
				steps: Library.parse({ // step
					call: Library.extract({ // step
						name: "",
						description: "",
						input: { path: 'file/path.xls' })
					})
				})
			})
		})

// config based
	module.exports =
		Numerati.define({
			name: "",
			description: "",
			call: {
				method: "pipeline",
				input: {
					steps: [
						{ // step
							name: "",
							description: "",
							library: "Library",
							method: "extract",
							input: {
								path: 'file/path.xls' 
							}
						},
						{ // step
							library: "Library",
							method: "excel",
							type: "parse"
						}
					]
				}
		})
