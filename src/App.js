const Pet = () => { //"pet stamp"
    return React.createElement("div", {}, [  // array - I have a div and within that div there's going to be 3 other elms
        React.createElement("h2", {}, "Tony"),
        React.createElement("h2", {}, "Cat"),
        React.createElement("h2", {}, "Black MeowMeow"),
    ])
}

const App = () => {                  // function that returns the results of React.createElement: A REACT COMPONENT (App as a rubber stamp)
    return React.createElement(     // "stamps" 2x     React.createElement is hidden once .jsx is implemented. 
        "div",                     // first "stamps" a div
        {},                        // then stamps any added attributes (if object weren't empty)
        [
            React.createElement("h1", {}, "Adopt Me!"), // {} == empty object, so you can put put in attributes (class name, style, etc.) that you want passed on to that element 
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement("h1", {}, "Adopt Me!"),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));   // rendering a function  // we have to put it some, where: document.getElementById('root')) 
