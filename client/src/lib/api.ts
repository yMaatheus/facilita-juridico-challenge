import { env } from './env'

const API_URL = env.NEXT_PUBLIC_API_BASE_URL

export async function api<T>(path: string, init?: RequestInit) {
  const url = new URL(path, API_URL)

  const response = await fetch(url, { credentials: 'include', ...init })

  if (!response.ok) {
    const { message } = await response.json()

    if (!message) throw new Error(response.statusText)

    throw new Error(message)
  }

  const data = (await response.json()) as T

  return {
    ...response,
    data,
  }
}