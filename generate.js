config = require ("./config")

security_group_counter = 0
cidr_port = []

config.ports.forEach (function (port) {
  config.list.forEach (function (cidr) {
    cidr_port.push ({
      "cidr": cidr + (cidr.indexOf ("/") < 0 === true ? "/32" : ""),
      "port": port
    })
  })
})

cidr_port.forEach (function (value, index, array) {
  cidr = value.cidr
  port = value.port

  if (index % config.max_security_group_size == 0) {
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
  console.log ("          from_port: " + port)
  console.log ("          to_port: " + port)
  console.log ("          cidr_ip: " + cidr)
})
