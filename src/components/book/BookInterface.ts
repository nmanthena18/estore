export interface Book  {
    id: number,
    title: string,
    isbn: string,
    pageCount: string,
    publishedDate: object,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    categories:Array<string>,
    price: number,
    author: string,
    isBought:boolean
  }