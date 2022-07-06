const initState = {
  projects: [
    { id: "1", title: "first", content: "blah blah blah" },
    { id: "2", title: "second", content: "blah blah blah" },
    { id: "3", title: "third", content: "blah blah blah" },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project success");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error");
      return state;
    default:
      return state;
  }
};
export default projectReducer;
