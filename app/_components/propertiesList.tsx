'use client'

import {useGetProperties} from '../_hooks/use-get-properties'

export default function PropertiesList() {
  const {isLoading, data, isError, error} = useGetProperties()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error fetching properties: {error?.message}</span>
  }

  return <span>{data ? data[0].zpid : `Hello`}</span>
}
