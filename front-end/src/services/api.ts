export const BASE_URL: string = "http://localhost:1337"

type ErrorRequestType = {
  status: number
  name: string
  message: string
}

export async function request<T>(
  endpoint: string,
  options?: object
): Promise<[T, ErrorRequestType]> {
  let data!: T
  let error!: ErrorRequestType
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options)

    if (!response.ok) {
      const newError = await response.json()
      throw new Error(JSON.stringify(newError.error))
    }
    const json = await response.json()
    json.data ? (data = json.data) : (data = json)
  } catch (newError: any) {
    error = JSON.parse(newError.message)
  } finally {
    return [data, error]
  }
}
