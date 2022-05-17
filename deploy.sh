#!/bin/bash
set -e
SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
if [[ -n "${tag}"]]; then
    echo "deploy to master"
fielse
    echo "deploy to staging"
if    
