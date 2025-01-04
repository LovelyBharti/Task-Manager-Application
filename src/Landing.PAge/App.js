import Home from "./Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;