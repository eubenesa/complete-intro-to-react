const ce = React.createElement;

const MyTitle = props => {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = () => {
  return ce("div", { id: "my-first-component" }, [
    ce(MyTitle, { title: "Game of Thrones", color: "YellowGreen" }),
    ce(MyTitle, { title: "Stranger Things", color: "GreenYellow" }),
    ce(MyTitle, { title: "Silicon Valley", color: "LimeGreen" }),
    ce(MyTitle, { title: "Unbreakable Kimmy Schmidt", color: "peru" })
  ]);
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
