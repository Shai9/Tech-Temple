import  {createClient}  from "@sanity/client";
import  ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "mlrkg1kg",
  dataset: 'production',
  apiVersion: "2023-05-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export default client;