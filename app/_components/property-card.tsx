'use client'

import {Card} from '@/components/ui/card'
import {Property} from '@/types/properties'
import Image from 'next/image'

interface PropertyCardProps {
  property: Property
}

export const PropertyCard = ({property}: PropertyCardProps) => {
  return (
    <Card className='w-[25rem]'>
      <Image
        src={property.media.propertyPhotoLinks.highResolutionLink}
        alt={property.address.city}
        width={400}
        height={200}
      ></Image>
    </Card>
  )
}
