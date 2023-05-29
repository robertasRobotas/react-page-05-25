import styles from "./Content.module.css";
import building from "../../assets/proyecto-verde.png";
import Article from "../article/Article";

const buildingArray = [
  {
    title: "Article 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/New_York_City_building.jpg",
  },
  {
    title: "Article 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1MND37AyuQfvNqLcWbTo-RKqKxN_NWG4RA1u_XM64uzKKDGRbX0AwaOWWMM77ZfBF-c&usqp=CAU",
  },
  {
    title: "Article 3",
    img: "https://www.nyhabitat.com/blog/wp-content/uploads/2013/01/Times-square-manhattan-new-york-nyc-crossroads-world.jpg",
  },
  {
    title: "Article 4",
    img: "https://image.newyork.co.uk/wp-content/uploads/2012/09/Times-Square-in-New-York-Billboards.jpg.webp",
  },
];

const Content = () => {
  return (
    <div className={styles.content}>
      {buildingArray.map((article) => (
        <Article title={article.title} img={article.img} />
      ))}
    </div>
  );
};

export default Content;
