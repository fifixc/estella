export interface MetaData {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    alt: string;
  };
}
