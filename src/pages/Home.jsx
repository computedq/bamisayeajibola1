
import Hero from "../components/Hero";
import FoodCard from "../components/FoodCard";
import "./Home.css";

function Home({ foods, onAddToCart }) {
  return (
    <main>
      <Hero
        heading="lovely,tasty and hot food delevered in an hour or less"
        description="Welcome to horizon food delevery system. Enjoy freshly hot and tasty meals made with quality ingredients and delivered straight to you with no hold backs."
        image="https://i.pinimg.com/736x/b5/0d/22/b50d22aed638664f17fe53e43680d7c8.jpg"
      />

      <section className="featured">
        <h2>Popular Meals</h2>
        <p>Discover some of our customers' favourites.</p>

        <div className="food-grid">
          {foods.slice(0, 3).map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
