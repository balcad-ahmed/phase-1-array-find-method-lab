function superbowlWin(record) {
  // find the first game object where result is 'W'
  const win = record.find(r => r.result === 'W')
  // if found, return the year string, otherwise undefined
  return !!win ? win.year : undefined
}

// Export for Node (in case tests or environments require it)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { superbowlWin }
}
