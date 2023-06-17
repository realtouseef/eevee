export interface Stories {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  updated_date: string;
  url: string;
  byline: string;

  multimedia?: {
    copyright: string;
    url: string;
    type: string;
  }[];
}
