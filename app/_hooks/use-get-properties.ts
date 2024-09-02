import {getProperties} from '@/actions/actions'
import {Property} from '@/types/properties'
import {useQuery} from '@tanstack/react-query'

export function useGetProperties() {
  const {isLoading, data, isError, error} = useQuery<Property[]>({
    queryKey: ['properties'],
    queryFn: () => getProperties(),
  })

  return {isLoading, data, isError, error}
}
