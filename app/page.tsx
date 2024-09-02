import { getProperties } from '@/actions/actions';
import {Navbar} from './_components/navbar'
import PropertiesList from './_components/propertiesList';

export default async function Home () {
  return (
    <section>
      <PropertiesList />
    </section>
  )
}
