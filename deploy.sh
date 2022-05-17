#!/bin/bash
set -e
if [[ -n "${tag}" ]]; then
   echo "-n ${tag} : 字符串长度不为 0"
else
   echo "-n ${tag} : 字符串长度为 0"
fi