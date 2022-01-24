const Pet = (props) => {
  //"pet stamp"
  return React.createElement("div", {}, [
    // array - I have a div and within that div there's going to be 3 other elms
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  // function that returns the results of React.createElement: A REACT COMPONENT (App as a rubber stamp)
  return React.createElement(
    // "stamps" 2x     React.createElement is hidden once .jsx is implemented.
    "div", // first "stamps" a div
    {}, // then stamps any added attributes (if object weren't empty)
    [
      React.createElement("h1", { id: "my-brand" }, "Adopt Me!"), // {} == empty object, so you can put put in attributes (class name, style, etc.) that you want passed on to that element
      React.createElement(Pet, {
        name: "Tony",
        animal: "Cat",
        breed: "Black MeowMeow",
      }),
      React.createElement(Pet, {
        name: "Inge",
        animal: "Dog",
        breed: "German Shepherd",
      }),
      React.createElement(Pet, {
        name: "Petri",
        animal: "Fish",
        breed: "Goldfish",
      }), // 6 h3's will be outputted to the DOM (2 per Pet * the 3x in App)
    ] // passing properties ^^ into pet elm but need to be able  'read' them => PROPS
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root")); // rendering a function  // we have to put it some, where: document.getElementById('root'))
