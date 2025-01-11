export function getNewFullDate() {
  try {
    let date_ob = new Date()
        date_ob = convertTZ(date_ob, 'Asia/Jakarta')
    const date    = ('0' + date_ob.getDate()).slice(-2)
    const month   = ('0' + (date_ob.getMonth() + 1)).slice(-2)
    const year    = date_ob.getFullYear()
    const hours   = date_ob.getHours()
    const minutes = date_ob.getMinutes()
    const seconds = date_ob.getSeconds()
    var dateNow = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds

    return dateNow
  } catch (error) {
    throw error
  }
}

export function convertTZ(date, tzString) {
  try {
    return new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
        timeZone: tzString,
      }),
    )
  } catch (error) {
    throw error
  }
}
