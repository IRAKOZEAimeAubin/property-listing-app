'use client'

import {ExclamationTriangleIcon} from '@radix-ui/react-icons'
import {useGetProperties} from '../_hooks/use-get-properties'
import {PropagateLoader} from 'react-spinners'
import {PropertyCard} from './property-card'

export default function PropertiesList() {
  const {isLoading, data, isError, error} = useGetProperties()

  if (isLoading) {
    return (
      <div>
        <PropagateLoader color='#AFA5DE' />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
        <ExclamationTriangleIcon className='h-4 w-4' />
        <p>Failed to retrieve properties. Please try again later!</p>
      </div>
    )
  }

  return (
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {data ? (
        data.map( ( property ) => (
            <PropertyCard key={property.zpid} property={property} />
        ))
      ) : (
        <span>No properties to display!</span>
      )}
    </div>
  )
}
