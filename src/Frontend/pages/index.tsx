import Image from 'next/image'
import { getItem } from '../utils/umbracoContentDeliveryApi'
import getConfig from '@/utils/configManager';
const appConfig = getConfig();

export default function Home(props: any) {
  const {name, properties, config } = props;

  const imageUrl = `${config.domain}${properties.heroImage[0]?.url}`;
  console.log(config.domain);

  return (
    <section className="hero">
      <div className="hero-content">
       <h1 className="hero-title">
            {properties.title}
       </h1>
       <h2 className="hero-subtitle">
            {properties.subtitle}
       </h2>
       <div dangerouslySetInnerHTML={{__html: properties.description.markup}}></div>
       <Image src={imageUrl} alt={properties.title} width={300} height={100} unoptimized={true} />
      </div>
    </section>
  )
}

export async function getStaticProps(){
  const homePage = await getItem('home');
  console.log('homepage', homePage);
  return {
    props: {
      name: homePage.name,
      properties: homePage.properties,
      config: appConfig
    }
  }
}