'use client'

import {Card} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator';
import {Property} from '@/types/properties'
import {formatDate} from '@/util/formatDate'
import Image from 'next/image'

interface PropertyCardProps {
  property: Property
}

export const PropertyCard = ({property}: PropertyCardProps) => {
  return (
    <Card className='w-[25rem] flex flex-col gap-3 overflow-hidden'>
      <Image
        src={property.media.propertyPhotoLinks.highResolutionLink}
        alt={property.address.city}
        width={400}
        height={200}
        className='max-h-[200px] aspect-[400/200] object-cover'
      />
      <div className='p-2 flex flex-col gap-1'>
        <span className='font-bold text-xl text-[#6a5eef] tracking-wider'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          }).format(property.price.value)}
        </span>
        <span className='text-xl font-semibold'>{property.address.city}</span>
        <span className='text-[#787c8d]'>{formatDate( property.address )}</span>
        <Separator />
      </div>
    </Card>
  )
}
