export const BASE_URL: string = "http://localhost:1337"

export type ErrorRequestType = {
  status: number
  name: string
  message: string
}

export async function request<T>(
  endpoint: string,
  options?: object
): Promise<[T | null, ErrorRequestType | null]> {
  let data!: T | null
  let error!: ErrorRequestType | null
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options)
    if (!response.ok) {
      const newError = await response.json()
      throw new Error(JSON.stringify(newError.error))
    }
    const json = await response.json()
    json.data ? (data = json.data) : (data = json)
    error = null
  } catch (newError: any) {
    error = JSON.parse(newError.message)
  } finally {
    console.log(error)
    return [data, error]
  }
}
