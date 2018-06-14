class MindFlow {
	// define node 
	static node({ about, format, execute }) {
		// if defining multiple nodes
		if(arguments[0] instanceof Array) {
			for(let node of arguments[0]) {
				MindFlow.node(node)
			}
		}
		else {
			// if no node defined yet
			if(MindFlow.nodes == undefined)
				MindFlow.nodes = { }
			
			// define this node
			MindFlow.nodes[about.name] = arguments[0]
			
			// return a function that actually executes this node
			return function({ data, input }) {
				return MindFlow.execute(
					Object.assign(
						{
							node: execute
						},
						arguments[0]
					)
				)
			}
		}
	}
	
	// call node
	static execute({ node, data, input }) {
		switch(typeof node) {
			case "string":
				return MindFlow.nodes[node].execute(arguments[0])
				break

			case "function":
				return node(arguments[0])
				break
		}
	}
}

if(module) {
	module.exports = MindFlow
}

if(global) {
	global.MindFlow = MindFlow	
}
