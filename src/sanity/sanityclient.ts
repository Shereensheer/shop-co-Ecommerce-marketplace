import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'sjwfu2r0', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset name (e.g., "production")
  apiVersion: '2023-01-01',    // Use today's date for the API version
  useCdn: true,                // Use the CDN for faster response times in production
});

export default sanityClient;
