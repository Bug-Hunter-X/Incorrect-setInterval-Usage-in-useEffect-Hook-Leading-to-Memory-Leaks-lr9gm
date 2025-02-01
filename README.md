# Incorrect setInterval Usage in useEffect Hook Leading to Memory Leaks

This example demonstrates a common mistake when using the `setInterval` function within a React component's `useEffect` hook.  The issue arises from improper cleanup of the interval, leading to memory leaks and unexpected behavior.

The `bug.js` file contains the buggy code, showing how `setInterval` is used incorrectly.  The `bugSolution.js` file presents the corrected version.

## Problem

The primary problem lies in how the interval is cleared. Using `clearInterval(setInterval)` is incorrect;  `setInterval` returns the interval ID, which needs to be cleared.  The original code fails to store and utilize this ID, resulting in uncleaned intervals.

## Solution

The corrected code stores the returned interval ID and then uses this ID to clear the interval in the cleanup function.