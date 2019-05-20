
module.exports = {
  urlGen: function (username, gist_edit) {
    return [...(username + gist_edit).toString()]
      .map(char => char.charCodeAt(0))
      .reduce((current, previous) => previous.toString() + current.toString())
  },

  timestamp: Date.now() / 1000 | 0,

  unixTimeToTime: function(unix_timestamp) {
    const timeStamp = new Date(unix_timestamp*1000);
    const date = timeStamp.getDate();
    const month = timeStamp.getMonth() + 1;
    const year = timeStamp.getFullYear();
    return `${month}, ${date}, ${year}`
  }
}