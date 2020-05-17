#!/usr/bin/env node

const { execSync } = require('child_process')

console.log(execSync(`ifconfig -a | grep "^[a-zA-Z0-9]" | awk -F':' '{print cat $1}' | while read -r line; do  cat /sys/class/net/$line/address; done`).toString())

