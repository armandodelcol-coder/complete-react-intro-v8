const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Bili",
                animal: "Dog",
                breed: "Mixed"
            }),
            React.createElement(Pet, {
                name: "Jack",
                animal: "Dog",
                breed: "Jack Hussel"
            }),
            React.createElement(Pet, {
                name: "Tobby",
                animal: "Dog",
                breed: "Mixed"
            }),
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));