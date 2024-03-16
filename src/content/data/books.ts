export type BookData = {
  title: string;
  author: string;
  published: string;
  fiction: boolean;
  url: string;
  image: any;
  yearRead: string | undefined;
  myNotes: string | undefined;
  starred: boolean;
};

import redwall from "../assets/book-covers/redwall.jpg";
import theThreeBodyProblem from "../assets/book-covers/the-three-body-problem.jpg";

export const bookData: BookData[] = [
  {
    title: "The Three-Body Problem (series)",
    author: "Cixin Liu",
    image: theThreeBodyProblem,
    url: "https://books.google.com/books/about/The_Three_Body_Problem.html?id=ZrNzAwAAQBAJ",
    published: "2014",
    fiction: true,
    yearRead: undefined,
    myNotes: undefined,
    starred: true,
  },
  {
    title: "Redwall (series)",
    author: "Brian Jacques",
    image: redwall,
    url: "https://books.google.com/books/about/Redwall.html?id=dAtzZReRZyAC",
    published: "1986",
    fiction: true,
    yearRead: undefined,
    myNotes: "A childhood classic!",
    starred: true,
  },
];
