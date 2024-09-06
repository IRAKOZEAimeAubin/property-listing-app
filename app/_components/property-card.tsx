'use client'

import {Card} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import {Property} from '@/types/properties'
import {formatDate} from '@/util/formatDate'
import Image from 'next/image'
import {LuBath} from 'react-icons/lu'
import {LuBedDouble} from 'react-icons/lu'
import {RxDimensions} from 'react-icons/rx'

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
      <div className='pb-4 px-4 flex flex-col gap-2'>
        <span className='font-bold text-xl text-[#6a5eef] tracking-wider'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          }).format(property.price.value)}
        </span>
        <span className='text-xl font-semibold'>{property.address.city}</span>
        <span className='text-[#787c8d] font-medium'>{formatDate(property.address)}</span>
        <Separator />
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <LuBedDouble className='text-[#6a5eef]' />
            <span className='text-sm text-[#787c8d] font-medium'>
              {property.bathrooms} Beds
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <LuBath className='text-[#6a5eef]' />
            <span className='text-sm text-[#787c8d] font-medium'>
              {property.bathrooms} Bathrooms
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <RxDimensions className='text-[#6a5eef] rotate-[145deg]' />
            <span className='text-sm text-[#787c8d] font-medium'>
              {property.lotSizeWithUnit
                ? property.lotSizeWithUnit.lotSize
                : `-`}{' '}
              sqft
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
