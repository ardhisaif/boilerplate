import axios from 'axios'

export async function createFaktur(kode, tanggal) {
  try {
    console.log({ kode, tanggal }, process.env.TRANSACTION_SERVER_URL)
    const { data } = await axios.post(
      process.env.TRANSACTION_SERVER_URL + 'createFaktur',
      new URLSearchParams({
        kode: kode,
        tanggal: tanggal,
      }),
    )

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
