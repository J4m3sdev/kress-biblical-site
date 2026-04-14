export interface Book {
  title: string;
  price: string;
  image: string;
  slug: string;
  amazonUrl?: string;
  category?: string;
}

export const featuredBooks: Book[] = [
  {
    title: "The Slander and Solace of Job: An Exposition of the Book of Job",
    price: "$24.99",
    image: "https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/08/Job-Commentary-Front-Cover-scaled.jpg?resize=600x900&ssl=1",
    slug: "slander-solace-job",
    amazonUrl: "https://www.amazon.com/dp/1934952915",
    category: "Commentaries",
  },
  {
    title: "Isaiah's Great Light: The Salvation of God in the Servant Songs",
    price: "$15.99",
    image: "https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/06/71XtOT0fMZL._SL1500_.webp?resize=600x900&ssl=1",
    slug: "isaiahs-great-light",
    amazonUrl: "https://www.amazon.com/dp/193495280X",
    category: "Biblical Studies",
  },
  {
    title: "The Holy Spirit According to Jesus: A Beginner's Guide to the Third Person of the Trinity",
    price: "$14.99",
    image: "https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/06/51eqpDJXe9L._SL1500_.webp?resize=600x900&ssl=1",
    slug: "holy-spirit-according-to-jesus",
    amazonUrl: "https://www.amazon.com/dp/1934952842",
    category: "Biblical Studies",
  },
  {
    title: "1 Peter for Pastors",
    price: "$33.99",
    image: "https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2024/07/Thumbnail-1-Peter.jpg?resize=600x920&ssl=1",
    slug: "1-peter-for-pastors",
    amazonUrl: "https://www.amazon.com/dp/1934952834",
    category: "Commentaries",
  },
];

export const allBooks: Book[] = [
  ...featuredBooks,
  {
    title: "Stand Fast in Liberty: An Exposition of Galatians",
    price: "$14.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/images/products/p-19565-standfastinliberty102__28037.jpg",
    slug: "stand-fast-in-liberty",
    category: "Commentaries",
  },
  {
    title: "Forsaking Israel: How It Happened and Why It Matters (2nd Edition)",
    price: "$21.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2020/06/Forsaking-Israel-Cover-500x747.jpg",
    slug: "forsaking-israel",
    category: "Biblical Studies",
  },
  {
    title: "The Story of Emily, a Proverbs 31 Woman",
    price: "$11.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/images/products/p-19625-The_Story_of_Emily_Front_Cover__30444.jpg",
    slug: "story-of-emily",
    category: "Biblical Counseling",
  },
  {
    title: "2-3 John & Jude: Truth and Danger in the Church",
    price: "$11.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2019/01/2-3-John-Jude-front-cover-500x754.jpg",
    slug: "2-3-john-jude",
    category: "Commentaries",
  },
  {
    title: "A Biblical Answer for Racial Unity",
    price: "$11.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2018/01/p-19501-Racial_Unity_front_cover__54283.jpg",
    slug: "racial-unity",
    category: "Biblical Studies",
  },
  {
    title: "A Biblical Critique of Infant Baptism",
    price: "$15.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/images/products/p-19539-abiblicalcritique175__31847.jpg",
    slug: "critique-infant-baptism",
    category: "Biblical Studies",
  },
  {
    title: "Answering Anxiety: A Biblical Answer for What Troubles Your Heart",
    price: "$12.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2018/01/p-19501-Racial_Unity_front_cover__54283.jpg",
    slug: "answering-anxiety",
    category: "Biblical Counseling",
  },
  {
    title: "Expository Listening: A Practical Handbook for Hearing and Doing God's Word",
    price: "$14.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/images/products/p-19565-standfastinliberty102__28037.jpg",
    slug: "expository-listening",
    category: "Practical Theology",
  },
  {
    title: "Philippians for Pastors",
    price: "$29.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2024/07/Thumbnail-1-Peter.jpg?resize=600x920&ssl=1",
    slug: "philippians-for-pastors",
    category: "Commentaries",
  },
  {
    title: "God's Wisdom in Proverbs",
    price: "$16.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/images/products/p-19565-standfastinliberty102__28037.jpg",
    slug: "gods-wisdom-proverbs",
    category: "Biblical Studies",
  },
  {
    title: "The Pastoral Epistles for Pastors",
    price: "$34.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2024/07/Thumbnail-1-Peter.jpg?resize=600x920&ssl=1",
    slug: "pastoral-epistles-for-pastors",
    category: "Commentaries",
  },
  {
    title: "Colossians and Philemon for Pastors",
    price: "$29.99",
    image: "https://www.kressbiblical.com/wp-content/uploads/2024/07/Thumbnail-1-Peter.jpg?resize=600x920&ssl=1",
    slug: "colossians-philemon-for-pastors",
    category: "Commentaries",
  },
];

export const blogPosts = [
  {
    title: "Obscure or Overlooked Commentaries on ... Acts",
    slug: "obscure-overlooked-commentaries-acts",
    date: "November 17, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Discover lesser-known but valuable commentaries on the book of Acts that deserve more attention from serious Bible students.",
  },
  {
    title: "Obscure or Overlooked Commentaries on ... Matthew",
    slug: "obscure-overlooked-commentaries-matthew",
    date: "November 2, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Resources on the Gospel of Matthew that don't always get the attention they deserve from expositors and students.",
  },
  {
    title: "Obscure or Overlooked Commentaries on ... Proverbs",
    slug: "obscure-overlooked-commentaries-proverbs",
    date: "October 6, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Exploring excellent commentaries on Proverbs beyond the well-known volumes, for deeper study of biblical wisdom.",
  },
  {
    title: "Obscure or Overlooked Books for ... Sermon Illustrations",
    slug: "obscure-overlooked-sermon-illustrations",
    date: "September 22, 2018",
    author: "Kress Biblical Resources",
    excerpt: "A curated list of lesser-known illustration resources that pastors will find invaluable for preaching.",
  },
  {
    title: "Obscure or Overlooked Commentaries on ... Titus",
    slug: "obscure-overlooked-commentaries-titus",
    date: "August 31, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Helpful volumes on the book of Titus that many pastors and students may not know about.",
  },
  {
    title: "Obscure or Overlooked Commentaries on ... Jonah",
    slug: "obscure-overlooked-commentaries-jonah",
    date: "August 26, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Surprising and insightful commentary resources for studying the book of Jonah in depth.",
  },
  {
    title: "Resource for Corporate Prayer Times",
    slug: "resource-corporate-prayer-times",
    date: "August 15, 2018",
    author: "Kress Biblical Resources",
    excerpt: "A practical resource to help churches enrich their corporate prayer gatherings.",
  },
  {
    title: "Best Websites for Exegetical and Expositional Outlining",
    slug: "best-websites-exegetical-outlining",
    date: "July 20, 2018",
    author: "Kress Biblical Resources",
    excerpt: "Top online resources to help pastors and Bible students with exegetical and expositional sermon outlining.",
  },
];
