#! /usr/bin/env node
/* eslint-disable */
'use strict'

const fs = require('fs')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

if (
  process.env.npm_config_user_agent &&
  !process.env.npm_config_user_agent.includes('yarn')
) {
  const notUsingYarnErrorMessage = `You are using different package manager, please use yarn`
  console.log(notUsingYarnErrorMessage)
  exec(
    `rm -f ${path.dirname(
      __dirname
    )}/package-lock.json && rm -rf ${path.dirname(__dirname)}/node_modules/`
  )
  console.log(`Node_modules and package-lock.json removed successfully`)
  process.exit(1)
}

fs.readFile(path.join(__dirname, '../.nvmrc'), 'utf8', function (error, data) {
  if (error) throw error

  const expectedVersion = data.trim()
  const currentVersion = process.version.replace('v', '')

  if (expectedVersion !== currentVersion) {
    const notUsingNodeVersionErrorMessage = `You are using different Node.js version, please use: ${expectedVersion}`
    console.log(notUsingNodeVersionErrorMessage)
    throw new Error(notUsingNodeVersionErrorMessage)
  }
  process.exit()
})
