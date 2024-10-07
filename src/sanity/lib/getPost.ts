import { sanityClient } from "sanity:client";

export async function getPosts() {
    const query = `*[_type == "post"]{ 
      _id, 
      title, 
      slug, 
      mainImage{asset->{url}},
      video{asset->{url}},
      publishedAt
    }`;
  
    const posts = await sanityClient.fetch(query);
    return posts;
  }