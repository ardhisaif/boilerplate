import { z } from 'zod'

export function zodString(key) {
  return z.string({
    invalid_type_error: `invalid ${key} type, expected a string`,
    required_error: `${key} is required`,
  })
}

export function zodNumber(key) {
  return z.number({
    invalid_type_error: `invalid ${key} type, expected a number`,
    required_error: `${key} is required`,
  })
}

export function zodArray(key, data) {
  return z.array(data, {
    invalid_type_error: `invalid ${key} type, expected an array`,
    required_error: `${key} is required`,
  })
}

export function zodStringDate(key, nonempty = true) {
  return z.string().refine((value) => {
    const reg = /^(\d{4})-(\d{2})-(\d{2})$/
    if (nonempty) return reg.test(value)
    return value === '' || reg.test(value)
  }, `${key} must be a valid date, format 'yyyy-MM-dd'`)
}

export function email() {
  return zodString('email').email('Silahkan masukan alamat email yang valid (contoh : name@company.com)').min(1, 'email tidak boleh kosong')
}
