# array2ansible-aws-subnet-rules
Converts an array of ips and protocols to ansible yaml to create security subnets 

## Usage

### Modify configuration
 * `max_security_group_size` - The max size of the security groups to create.  Note outbound has at least one rule so 49 is recomended as the max (AWS max is 50 total)
 * `security_group_name` - The name you wish to use for the security group
 * `vpc_id` - The vpc id this security groups will exist in
 * `vpc_region` - The VPC region the security group will be created in
 * `ports` - The list of ports to be used
 * `list` - The list of cidr to be included in the security groups

 ### Run the tool
 ```
 node generate
 ```

 ### Update your playbook
 Copy the generated code back into your playbook for use
 