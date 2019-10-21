const imgIDArray = () => {
  const imgId = Math.floor(Math.random() * 1000 + 1);
  return "https://picsum.photos/id/" + imgId + "/500";
};

const cardListDummy = [
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 11
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 12
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 10
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 14
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 14
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 14
  },
  {
    imgSrc: imgIDArray(),
    day: "2017-09-14",
    heading: "Heading",
    description:
      "To keep moving forward againt the friction, we overcome the ______ friction.",
    id: 14
  }
];

export default cardListDummy;
