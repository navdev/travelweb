import Image from 'next/image'
import { getItem } from '../utils/umbracoContentDeliveryApi'


export default function About(props: any) {
    const {name, properties} = props;
    return (
      <div>This is {name}</div>
    )
}

export async function getStaticProps(){
  const homePage = await getItem('about');
  console.log('aboutpage', homePage);
  return {
    props: {
      name: homePage.name,
      properties: homePage.properties
    }
  }
}

