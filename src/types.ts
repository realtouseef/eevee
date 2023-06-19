// top-stories
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

// rick and morty

export interface CharacterTypes {
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
  }[];
}

// valorant agents

export interface AgentProps {
  displayName: string;
  description: string;
  displayIcon: string;
  role: {
    displayName: string;
  };
  abilities: {
    displayName: string;
  }[];
}
