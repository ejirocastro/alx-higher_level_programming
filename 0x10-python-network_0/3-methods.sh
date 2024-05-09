#!/bin/bash

# Check if a URL is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Send an OPTIONS request to get supported methods
curl -s -X OPTIONS -i "$1" | grep "Allow:" | awk '{print $2}'
