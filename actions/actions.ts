'use server'

import {Property} from '@/types/properties'

export async function getProperties(): Promise<Property[]> {
  try {
    const response = await fetch(`${process.env.JSON_SERVER_URL}`)
    if (!response.ok) {
      throw new Error(`Error Status: ${response.status}`)
    }
    const properties: Property[] = await response.json()
    return properties
  } catch (error) {
    throw new Error(`Fetch error: ${error}`)
  }
}
