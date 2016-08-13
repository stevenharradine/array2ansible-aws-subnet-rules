config = require ("./config")

security_group_counter = 0

config.protocols.forEach (function (protocolValue) {
	config.list.forEach (function (value, index, array) {
		if (index % 50 == 0) {
			this_security_group_name = config.security_group_name + " " + ++security_group_counter
			console.log ("  - name: " + this_security_group_name)
			console.log ("    ec2_group:")
			console.log ("      name: " + this_security_group_name)
			console.log ("      description: " + this_security_group_name)
			console.log ("      vpc_id: " + config.vpc_id)
			console.log ("      region: " + config.vpc_region)
			console.log ("      rules:")
		}
		console.log ("        - proto: tcp")
		console.log ("          from_port: " + protocolValue)
		console.log ("          to_port: " + protocolValue)
		console.log ("          cidr_ip: " + value + (value.indexOf ("/") < 0 === true ? "/32" : ""))
	})
})
