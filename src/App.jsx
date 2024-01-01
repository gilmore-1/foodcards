import React from "react";
import Foodcards from "./components/food/Foodcards";
import pizza from '../src/components/food/pizza.png'
import strawberry from '../src/components/food/strawberry.png'
import tortellini from '../src/components/food/tortellini.jpg'

function App() {
  return (
    <div className="row">
      <Foodcards
        title="Pepperoni Pizza"
        image={pizza}
        isgreen={false}
        isyellow={true}
        cal={265}
        pfc={"12/10/31"}
        c={53.8}
        price={"$29.90"}
        isdiscount={true}
        discount={'$29.90'}
        isred={true}
        description="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
      />

<Foodcards
        title="Tortellini"
        image={strawberry}
        isgreen={true}
        isyellow={true}
        cal={270}
        pfc={"18/4/41"}
        c={42.4}
        price={"$17.90"}
        isdiscount={true}
        discount={'$22.90'}
        isred={true}
        description="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
      />

<Foodcards
        title="Strawberry Cake"
        image={tortellini}
        isgreen={false}
        isyellow={true}
        cal={346}
        pfc={"6/14/49"}
        c={13.9}
        price={"$13.90"}
        isdiscount={true}
        discount={'$18.90'}
        isred={false}
        description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      />
    </div>
  );
}

export default App;
