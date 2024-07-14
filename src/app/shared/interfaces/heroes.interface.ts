export interface heroesI {
  id: number,
  comics: heroeInfoI,
  description: string,
  events: heroeInfoI,
  modified: Date,
  name: string,
  resourceURI: string,
  series: heroeInfoI,
  stories: heroeInfoI,
  thumbnail: thumbnailI,
  urls: urlsI[]
}

export interface heroeInfoI {
  available: number,
  collectionURI: string,
  items: itemsI[],
  returned: number
}

export interface heroeCustomData {
  data: string,
  available: number
}

interface itemsI {
  name: string
  resourceURI: string
}

interface urlsI {
  type: string,
  url: string
}

interface thumbnailI {
  extension: string,
  path: string
}